import Image from 'next/image'
import React, { SyntheticEvent, useState } from 'react'
import PlaceHolder from '../../../../public/assets/Placeholder.png'
import { Props } from './interface'
import { Edit, Trash } from '@icons'
import { DeleteModal } from '../DeleteModal'
import { useDisclosure } from '@mantine/hooks'
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
import NextLink from 'next/link'
import {
  FileInput,
  Input,
  Loader,
  Modal,
  SimpleGrid,
  TextInput,
} from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'
import { uploadS3 } from '@utils'
import { notifications } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { useMutation } from '@apollo/client'
import { DELETE_INFOGRAFIC, UPDATE_INFOGRAFIC } from '@/actions/infografic'

export const InfograficCard: React.FC<Props> = ({
  isAdmin,
  description,
  id,
  infograficUrl,
  title,
  refetch,
}) => {
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false)
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false)
  const [files, setFiles] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState(infograficUrl)
  const [loading, setLoading] = useState(false)

  const [mutateUpdate, {}] = useMutation(UPDATE_INFOGRAFIC)

  const [mutateDelete, {}] = useMutation(DELETE_INFOGRAFIC)

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
    content: description,
    editorProps: {
      attributes: {
        class: 'font-inter text-sm md:text-base',
      },
    },
  })

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
      let infograficUrl2 = infograficUrl
      if (files) {
        infograficUrl2 = await uploadS3({
          file: files,
          type: 'infografic',
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent
            const total2 = total ? (total as number) : 0
            const percent = Math.round((loaded / total2) * 100)

            const message = `Uploading Infografic... ${percent}%`

            notifications.show({
              id: 'load-data-Infografic',
              loading: true,
              title: 'Upload',
              message: message,
              autoClose: false,
              withCloseButton: false,
            })
          },
        })

        notifications.update({
          id: 'load-data-Infografic',
          color: 'teal',
          title: 'Success',
          message: 'Infografic was Uploaded',
          icon: <IconCheck size="1rem" />,
          autoClose: 2000,
        })
      }

      mutateUpdate({
        variables: {
          updateInfograficInput: {
            id,
            description: editor ? editor.getHTML() : '',
            infograficUrl: infograficUrl2,
            title: form.values.title,
          },
        },
        onCompleted: () => {
          closeEdit()
          notifications.show({
            title: 'Success',
            message: 'Edit Infografic Successfull',
            color: 'teal',
            autoClose: 3000,
          })
        },
        onError: (e) => {
          console.log('error', e)
          notifications.show({
            title: 'Failed',
            message: e.message,
            color: 'red',
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
      mutateDelete({
        variables: {
          removeInfograficId: id,
        },
        onCompleted: () => {
          refetch()
          closeDelete()
          notifications.show({
            title: 'Success',
            message: 'Delete Infografic Successfull',
            color: 'teal',
            autoClose: 3000,
          })
        },
        onError: (e) => {
          console.log('error', e)
          notifications.show({
            title: 'Failed',
            message: e.message,
            color: 'red',
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

  const disable = form.values.title == ''

  return (
    <div>
      <NextLink
        href={`/infographic/${id}`}
        className="lg:w-[445px] w-[200px] rounded-lg relative flex-none"
      >
        <div className="w-full aspect-infografic relative">
          <Image
            alt="Infografis"
            src={infograficUrl}
            fill
            className="rounded-t-lg"
          />
        </div>
        <div className="bg-[#D9D6FE] w-full relative rounded-lg -mt-2 lg:p-6 p-2">
          <p className="text-[#53389E] lg:text-2xl text-base font-bold max-h-[70px] overflow-hidden">
            {title}
          </p>
          <p className="lg:max-h-20 max-h-12 h-fit pb-6 overflow-hidden lg:text-base text-xs">
            {editor && editor.getText()}
          </p>
        </div>
      </NextLink>
      {isAdmin && (
        <div className="flex gap-2 mt-2">
          <button
            className="flex items-center justify-center gap-2 text-[#B42318] bg-[#FEF3F2] py-1 w-full rounded-lg font-semibold drop-shadow-lg active:drop-shadow-none lg:text-base md:text-sm text-xs"
            onClick={openDelete}
          >
            <Trash />
            <p>Hapus</p>
          </button>
          <button
            className="flex items-center justify-center gap-2 text-white bg-[#7F56D9] py-1 w-full rounded-lg font-semibold drop-shadow-lg active:drop-shadow-none lg:text-base md:text-sm text-xs"
            onClick={openEdit}
          >
            <Edit />
            <p>Edit</p>
          </button>
        </div>
      )}

      <DeleteModal
        close={closeDelete}
        open={openDelete}
        opened={openedDelete}
        tipe="Infografik"
        judul={title}
        handleDelete={handleDelete}
        loading={loading}
      />

      <Modal
        opened={openedEdit}
        onClose={closeEdit}
        centered
        withCloseButton={false}
        size="auto"
      >
        <div className="w-full h-full flex flex-col gap-5">
          <p className="text-[#101828] text-lg font-bold font-inter">
            Tambah Infografik
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
              Deskripsi
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
              Upload Infografik
            </Input.Label>
            <FileInput
              placeholder="Click here to pick file"
              withAsterisk
              value={files}
              onChange={setFiles}
              clearable
            />
            {previewUrl && (
              <SimpleGrid
                cols={4}
                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                className="mt-5"
              >
                <div className="w-full aspect-infografic relative">
                  <Image
                    src={previewUrl}
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
              onClick={close}
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
              {loading ? <Loader variant="dots" /> : `Edit Infografik`}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
