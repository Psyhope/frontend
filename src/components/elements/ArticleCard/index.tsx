import Image from 'next/image'
import { Props } from './interface'
import { Edit, Trash } from '@icons'
import { DeleteModal } from '../DeleteModal'
import React, { useState, SyntheticEvent, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks'
import {
  Modal,
  Input,
  TextInput,
  SimpleGrid,
  FileInput,
  Loader,
} from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'
import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import { useMutation } from '@apollo/client'
import { uploadS3 } from '@utils'
import { useRouter } from 'next/navigation'
import { DELETE_ARTICLE, UPDATE_ATRICLE } from '@/actions/article'
import { notifications } from '@mantine/notifications'

export const ArticleCard: React.FC<Props> = ({
  isAdmin,
  content,
  id,
  posterUrl,
  thumbnailUrl,
  title,
  refetch,
}) => {
  const [opened1, { open: open1, close: close1 }] = useDisclosure(false)
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false)

  const [loading, setLoading] = useState(false)
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [previewThumbnail, setPreviewThumbnail] = useState(thumbnailUrl)
  const [cover, setCover] = useState<File | null>(null)
  const [previewCover, setPreviewCover] = useState(posterUrl)

  const router = useRouter()

  const [mutate, { data, loading: createLoading }] = useMutation(UPDATE_ATRICLE)
  const [mutate2, { data: data2, loading: deleteLoading }] =
    useMutation(DELETE_ARTICLE)

  // Cover Preview
  useEffect(() => {
    if (cover) {
      const imageSrc = URL.createObjectURL(cover)
      setPreviewCover(imageSrc)
    } else {
      setPreviewCover(posterUrl)
    }
  }, [cover])

  // Thumbnail Preview
  useEffect(() => {
    if (thumbnail) {
      const imageSrc = URL.createObjectURL(thumbnail)
      setPreviewThumbnail(imageSrc)
    } else {
      setPreviewThumbnail(thumbnailUrl)
    }
  }, [thumbnail])

  const description = { __html: content }

  // Rich Text Editor
  const content1 = content
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: content1,
  })

  // Form
  const form = useForm({
    initialValues: {
      title: title,
    },
    validate: zodResolver(
      z.object({
        title: z.string().min(1),
      })
    ),
  })

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      let thumbnailUrl2 = thumbnailUrl
      if (thumbnail) {
        thumbnailUrl2 = await uploadS3({
          file: thumbnail,
          type: 'thumbnail',
        })
      }

      let coverUrl2 = posterUrl
      if (cover) {
        coverUrl2 = await uploadS3({
          file: cover,
          type: 'cover',
        })
      }

      mutate({
        variables: {
          updateArticleInput: {
            id: id,
            title: form.values.title,
            content: editor ? editor.getHTML() : '',
            posterUrl: coverUrl2,
            thumbnailUrl: thumbnailUrl2,
          },
        },
        onCompleted: () => {
          refetch()
          close2()
          notifications.show({
            title: 'Success',
            message: 'Edit Article Successfull',
            color: 'teal',
            autoClose: 3000,
          })
        },
      })
    } catch (error) {
      console.log('error', error)
      notifications.show({
        title: 'Failed',
        message: 'Someting Wrong...',
        color: 'red',
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    setLoading(true)
    try {
      mutate2({
        variables: {
          removeArticleId: id,
        },
        onCompleted: () => {
          refetch()
          close1()
          notifications.show({
            title: 'Success',
            message: 'Delete Article Successfull',
            color: 'teal',
            autoClose: 3000,
          })
        },
      })
    } catch (error) {
      console.log('error', error)
      notifications.show({
        title: 'Failed',
        message: 'Someting Wrong...',
        color: 'red',
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  const disable =
    form.values.title == '' || previewThumbnail == null || previewCover == null

  return (
    <div>
      <button onClick={() => router.push(`/article/${id}`)}>
        <div className="xl:w-[345px] lg:w-[280px] w-[200px] rounded-lg relative flex-none">
          <div className="w-full aspect-article relative">
            <Image
              alt="Infografis"
              src={thumbnailUrl}
              fill
              className="rounded-t-lg"
            />
          </div>
          <div className="bg-[#D9D6FE] w-full lg:h-[156px] h-[100px] relative rounded-lg -mt-2 lg:p-6 p-2">
            <p className="text-[#53389E] lg:text-2xl text-lg md:font-bold font-semibold text-start h-full  break-words overflow-hidden">
              {title}
            </p>
          </div>
        </div>
      </button>
      {isAdmin && (
        <div className="flex gap-2 mt-2">
          <button
            className="flex items-center justify-center gap-2 text-[#B42318] bg-[#FEF3F2] py-1 w-full rounded-lg font-semibold drop-shadow-lg active:drop-shadow-none lg:text-base md:text-sm text-xs"
            onClick={open1}
          >
            <Trash />
            <p>Hapus</p>
          </button>
          <button
            className="flex items-center justify-center gap-2 text-white bg-[#7F56D9] py-1 w-full rounded-lg font-semibold drop-shadow-lg active:drop-shadow-none lg:text-base md:text-sm text-xs"
            onClick={open2}
          >
            <Edit />
            <p>Edit</p>
          </button>
        </div>
      )}
      <DeleteModal
        close={close1}
        open={open1}
        opened={opened1}
        tipe="Artikel"
        judul={title}
        handleDelete={handleDelete}
        loading={loading}
      />
      <Modal
        opened={opened2}
        onClose={close2}
        centered
        withCloseButton={false}
        size="auto"
      >
        <div className="w-full h-full flex flex-col gap-5">
          <p className="text-[#101828] text-lg font-bold font-inter">
            Tambah Artikel
          </p>

          <div>
            <Input.Label
              className="text-black font-inter font-normal md:text-base text-sm pb-2"
              required
            >
              Judul
            </Input.Label>
            <TextInput
              radius="md"
              size="lg"
              placeholder="e.g. Website design"
              {...form.getInputProps('title')}
            />
          </div>

          <div>
            <Input.Label
              className="text-black font-inter font-normal md:text-base text-sm pb-2"
              required
            >
              Isi Artikel
            </Input.Label>
            <RichTextEditor editor={editor}>
              <RichTextEditor.Toolbar sticky stickyOffset={60}>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                  <RichTextEditor.ClearFormatting />
                  <RichTextEditor.Highlight />
                  <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                  <RichTextEditor.Subscript />
                  <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.AlignLeft />
                  <RichTextEditor.AlignCenter />
                  <RichTextEditor.AlignJustify />
                  <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.ColorPicker
                    colors={[
                      '#25262b',
                      '#868e96',
                      '#fa5252',
                      '#e64980',
                      '#be4bdb',
                      '#7950f2',
                      '#4c6ef5',
                      '#228be6',
                      '#15aabf',
                      '#12b886',
                      '#40c057',
                      '#82c91e',
                      '#fab005',
                      '#fd7e14',
                    ]}
                  />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>

              <RichTextEditor.Content />
            </RichTextEditor>
          </div>
          <div>
            <Input.Label
              className="text-black font-inter font-normal md:text-base text-sm pb-2"
              required
            >
              Upload Thumbnail (3:2)
            </Input.Label>
            <FileInput
              placeholder="Click here to pick file"
              withAsterisk
              value={thumbnail}
              onChange={setThumbnail}
              clearable
              accept="image/png,image/jpeg,image/jpg"
            />
            {previewThumbnail && (
              <SimpleGrid
                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                className="mt-5"
              >
                <div className="w-full md:w-1/4 aspect-article relative">
                  <Image
                    src={previewThumbnail}
                    fill
                    className="relative"
                    alt="preview"
                  />
                </div>
              </SimpleGrid>
            )}
          </div>
          <div>
            <Input.Label
              className="text-black font-inter font-normal md:text-base text-sm pb-2"
              required
            >
              Upload Cover (8:3)
            </Input.Label>
            <FileInput
              placeholder="Click here to pick file"
              withAsterisk
              value={cover}
              onChange={setCover}
              clearable
              accept="image/png,image/jpeg,image/jpg"
            />
            {previewCover && (
              <SimpleGrid
                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                className="mt-5"
              >
                <div className="w-full md:w-1/2 aspect-articleCover relative">
                  <Image
                    src={previewCover}
                    fill
                    className="relative"
                    alt="preview"
                  />
                </div>
              </SimpleGrid>
            )}
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            <button
              className="w-full py-2 bg-white border border-[#D0D5DD] text-[#344054] font-inter font-bold md:text-base text-sm rounded-lg drop-shadow-lg active:drop-shadow-none"
              onClick={close2}
            >
              Cancel
            </button>
            <button
              className={`w-full py-2 ${
                disable ? 'bg-gray-500' : 'bg-[#7F56D9]'
              } text-white font-inter font-bold md:text-base text-sm rounded-lg drop-shadow-lg active:drop-shadow-none flex items-center justify-center`}
              onClick={handleSubmit}
              disabled={disable || loading}
            >
              {loading ? <Loader variant="dots" /> : `Edit Article`}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
