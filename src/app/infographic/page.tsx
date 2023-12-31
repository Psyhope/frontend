'use client'
import { PlusSquare } from '@icons'
import Image from 'next/image'
import React, { useState, SyntheticEvent, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks'
import {
  Modal,
  Input,
  TextInput,
  SimpleGrid,
  FileInput,
  Loader,
  Pagination,
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
import { InfograficCard } from '@elements'
import { useMutation, useQuery } from '@apollo/client'
import {
  CREATE_INFOGRAFIC,
  GET_BY_PAGE_INFOGRAFIC,
  GET_COUNT_INFOGRAFIC,
} from '@/actions/infografic'
import { useAuth } from '@/components/contexts/AuthContext'
import { useRouter, useSearchParams } from 'next/navigation'
import { notifications } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { uploadS3 } from '@utils'

type Infografic = {
  id: number
  title: string
  description: string
  infograficUrl: string[]
}

const InfograficPage = () => {
  const { user } = useAuth()
  const router = useRouter()

  const [isAdmin, setIsAdmin] = useState(
    user.role == 'PSYHOPE_ADMIN' || user.secondRole == 'PSYHOPE_ADMIN'
  )

  const [opened, { open, close }] = useDisclosure(false)
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState<File[] | undefined>()
  const [previewUrl, setPreviewUrl] = useState<Array<string>>()
  const [listInfografic, setListInfografic] = useState<Array<Infografic>>()

  const [count, setCount] = useState(1)

  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page'))

  // get count
  const {} = useQuery(GET_COUNT_INFOGRAFIC, {
    onCompleted(data) {
      setCount(Math.ceil(data.countInfografic / 10))
    },
    onError(error) {
      console.log('error', error)
      notifications.show({
        title: 'Failed',
        message: 'Page Error...',
        color: 'red',
        autoClose: 3000,
      })
    },
  })

  useEffect(() => {
    if (files && files.length > 0) {
      const array: string[][] = files.map((file) => [
        URL.createObjectURL(file),
        file.name,
      ])
      const sortedUrls2: string[][] = [...array].sort((a, b) =>
        a[1].localeCompare(b[1])
      )
      const array2: string[] = sortedUrls2.map((url) => url[0])
      setPreviewUrl(array2)
    } else {
      setPreviewUrl([])
    }
  }, [files])

  // Query
  const { refetch: getAllRefetch } = useQuery(GET_BY_PAGE_INFOGRAFIC, {
    variables: {
      page: page,
    },
    onCompleted(data) {
      setListInfografic(data.findByPageInfografic)
    },
    onError(error) {
      console.log('error', error)
      notifications.show({
        title: 'Failed',
        message: 'Page Error...',
        color: 'red',
        autoClose: 3000,
      })
    },
  })

  // Mutation
  const [mutate, {}] = useMutation(CREATE_INFOGRAFIC, {
    refetchQueries: [GET_BY_PAGE_INFOGRAFIC],
  })

  // Rich Text Editor
  const content =
    '<h2 style="text-align: center">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a target="_blank" rel="noopener noreferrer nofollow" href="https://tiptap.dev/">Tiptap.dev</a> and supports all of its features:</p><p>General text formatting: </p><p>1. <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </p><p>2. Headings (h1-h6)</p><p>3. Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</p><p>4. Ordered and bullet listsText align&nbsp;And all <a target="_blank" rel="noopener noreferrer nofollow" href="https://tiptap.dev/extensions">other extensions</a></p>'
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
    content: content,
    editorProps: {
      attributes: {
        class: 'font-inter text-sm md:text-base',
      },
    },
  })

  const form = useForm({
    initialValues: {
      title: '',
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
      const infograficUrl: string[] = []

      if (files && files.length > 0) {
        await Promise.all(
          files.map(async (file, idx) => {
            const url = await uploadS3({
              file: file,
              type: 'infografic',
              onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent
                const total2 = total ? (total as number) : 0
                const percent = Math.round((loaded / total2) * 100)

                const message = `Uploading Infographic (${
                  idx + 1
                })... ${percent}%`

                notifications.show({
                  id: `load-data-Infografic-${idx}`,
                  loading: true,
                  title: 'Upload',
                  message: message,
                  autoClose: false,
                  withCloseButton: false,
                })
              },
            })
            infograficUrl.push(url)
            notifications.update({
              id: `load-data-Infografic-${idx}`,
              color: 'teal',
              title: 'Success',
              message: `Infographic (${idx + 1}) was Uploaded`,
              icon: <IconCheck size="1rem" />,
              autoClose: 2000,
            })
          })
        )
      }

      mutate({
        variables: {
          createInfograficInput: {
            description: editor ? editor.getHTML() : '',
            infograficUrl: infograficUrl,
            title: form.values.title,
          },
        },
        onCompleted: () => {
          close()
          notifications.show({
            title: 'Success',
            message: 'Add Infographic Successfull',
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
        message: 'Someting Wrong when create...',
        color: 'red',
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  const disable = form.values.title == '' || files == undefined

  return (
    <>
      <head>
        <title>Infografik | Empower U&I</title>
      </head>
      <div className="min-h-screen p-5 lg:px-28">
        {/* Hero */}
        <div className="bg-[#D9D6FE] rounded-md flex flex-col-reverse md:flex-row">
          <div className="p-5 lg:p-20">
            <p className="font-inter font-bold text-[#53389E] text-xl md:text-2xl lg:text-6xl">
              Infografik
            </p>
            <p className="font-inter text-xs text-[#1D2939] md:text-base lg:text-lg lg:leading-loose lg:mt-5 mt-2">
              Artikel ini akan mengajari Anda tentang dasar-dasar psikologi dan
              kesehatan mental, serta cara mengatasi tantangan umum kesehatan
              mental.
            </p>
            {isAdmin && (
              <button
                className="bg-[#7F56D9] w-full py-2 font-inter font-semibold lg:text-base md:text-sm text-xs text-white tracking-wider flex items-center justify-center gap-2 rounded-lg drop-shadow-lg active:drop-shadow-none mt-5"
                onClick={open}
              >
                <PlusSquare />
                <p>Tambah Infografik</p>
              </button>
            )}
          </div>
          <div className="relative lg:h-[300px] h-[150px] lg:w-[880px] w-full lg:my-10 lg:mr-10">
            <Image
              alt="Login Asset"
              src={'assets/LoginAsset.svg'}
              fill
              className="relative"
            />
          </div>
        </div>
        {/* Grid */}
        <div className=" flex justify-center mt-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 w-full">
            {listInfografic &&
              listInfografic.map((infografic) => (
                <InfograficCard
                  isAdmin={isAdmin}
                  key={infografic.id}
                  refetch={getAllRefetch}
                  {...infografic}
                />
              ))}
          </div>
        </div>
        <div className="w-full justify-center md:justify-end flex mt-5">
          <Pagination
            value={page}
            total={count}
            color="violet"
            withControls={false}
            onChange={(p) => router.push(`/infographic?page=${p}`)}
          />
        </div>
        <Modal
          opened={opened}
          onClose={close}
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
                multiple
              />
              {previewUrl && (
                <SimpleGrid
                  cols={4}
                  breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                  className="mt-5"
                >
                  {previewUrl.map((url, idx) => (
                    <div
                      className="w-full aspect-infografic relative"
                      key={idx}
                    >
                      <Image
                        src={url}
                        fill
                        className="relative"
                        alt="preview"
                      />
                    </div>
                  ))}
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
                {loading ? <Loader variant="dots" /> : `Tambah Infografik`}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default InfograficPage
