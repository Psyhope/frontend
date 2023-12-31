'use client'
import { EventCard } from '@elements'
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
import { useAuth } from '@/components/contexts/AuthContext'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMutation, useQuery } from '@apollo/client'
import {
  CREATE_EVENT,
  GET_BY_PAGE_EVENT,
  GET_COUNT_EVENT,
} from '@/actions/event'
import { notifications } from '@mantine/notifications'
import { uploadS3 } from '@utils'
import { IconCheck } from '@tabler/icons-react'

type Event = {
  id: number
  title: string
  date: string
  location: string
  time: string
  description: string
  posterUrl: string
}

const EventPage = () => {
  const { user } = useAuth()

  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(
    user.role == 'PSYHOPE_ADMIN' || user.secondRole == 'PSYHOPE_ADMIN'
  )

  const [opened, { open, close }] = useDisclosure(false)
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState('')

  const [listEvent, setListEvent] = useState<Array<Event>>()

  const [count, setCount] = useState(1)

  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page'))

  // get count
  const {} = useQuery(GET_COUNT_EVENT, {
    onCompleted(data) {
      setCount(Math.ceil(data.countEvent / 10))
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

  // Image Preview
  useEffect(() => {
    if (files) {
      const imageSrc = URL.createObjectURL(files)
      setPreviewUrl(imageSrc)
    } else {
      setPreviewUrl('')
    }
  }, [files])

  // Query
  const { refetch: getAllRefetch } = useQuery(GET_BY_PAGE_EVENT, {
    variables: {
      page: page,
    },
    onCompleted(data) {
      setListEvent(data.findByPageEvent)
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
  const [mutate, {}] = useMutation(CREATE_EVENT, {
    refetchQueries: [GET_BY_PAGE_EVENT],
  })

  const content =
    '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>'

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
      eventName: '',
      date: '',
      location: '',
      time: '',
    },
    validate: zodResolver(
      z.object({
        eventName: z.string().min(1),
        date: z.date(),
        location: z.string().min(1),
        time: z.string().min(1),
      })
    ),
  })

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const posterUrl = await uploadS3({
        file: files,
        type: 'event',
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent
          const total2 = total ? (total as number) : 0
          const percent = Math.round((loaded / total2) * 100)

          const message = `Uploading Poster... ${percent}%`

          notifications.show({
            id: 'load-data-poster',
            loading: true,
            title: 'Upload',
            message: message,
            autoClose: false,
            withCloseButton: false,
          })
        },
      })

      notifications.update({
        id: 'load-data-poster',
        color: 'teal',
        title: 'Success',
        message: 'Poster was Uploaded',
        icon: <IconCheck size="1rem" />,
        autoClose: 2000,
      })

      mutate({
        variables: {
          createEventInput: {
            date: form.values.date,
            description: editor ? editor.getHTML() : '',
            location: form.values.location,
            posterUrl,
            time: form.values.time,
            title: form.values.eventName,
          },
        },
        onCompleted: () => {
          close()
          notifications.show({
            title: 'Success',
            message: 'Add Event Successfull',
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

  const disable =
    form.values.date == null ||
    form.values.location == '' ||
    form.values.eventName == '' ||
    form.values.time == '' ||
    files == null

  return (
    <>
      <head>
        <title>Event | Empower U&I</title>
      </head>
      <div className="min-h-screen p-5 lg:px-28">
        {/* Hero */}
        <div className="bg-[#D9D6FE] rounded-md flex flex-col-reverse md:flex-row">
          <div className="p-5 lg:p-20">
            <p className="font-inter font-bold text-[#53389E] text-xl md:text-2xl lg:text-6xl">
              Upcoming Events
            </p>
            <p className="font-inter text-xs text-[#1D2939] md:text-base lg:text-lg lg:leading-loose lg:mt-5 mt-2">
              Gabunglah bersama dalam acara kesehatan mental kami dan jadikan
              langkah ini menuju versi dirimu yang lebih sehat dan bahagia.
            </p>
            {isAdmin && (
              <button
                className="bg-[#7F56D9] w-full py-2 font-inter font-semibold lg:text-base md:text-sm text-xs text-white tracking-wider flex items-center justify-center gap-2 rounded-lg drop-shadow-lg active:drop-shadow-none mt-5"
                onClick={open}
              >
                <PlusSquare />
                <p>Tambah Event</p>
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full">
            {listEvent &&
              listEvent.map((event) => (
                <EventCard
                  isAdmin={isAdmin}
                  {...event}
                  key={event.id}
                  refetch={getAllRefetch}
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
            onChange={(p) => router.push(`/event?page=${p}`)}
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
              Tambah Event
            </p>
            <div className="flex md:flex-row flex-col gap-5">
              <div>
                <Input.Label
                  className="text-black font-inter font-normal md:text-base text-sm pb-2"
                  required
                >
                  Nama Event
                </Input.Label>
                <TextInput
                  radius="md"
                  size="lg"
                  placeholder="e.g. Website design"
                  {...form.getInputProps('eventName')}
                />
              </div>
              <div>
                <Input.Label
                  className="text-black font-inter font-normal md:text-base text-sm pb-2"
                  required
                >
                  Tanggal Event
                </Input.Label>
                <TextInput
                  radius="md"
                  size="lg"
                  placeholder="e.g. 8 - 10 Juni 2023"
                  {...form.getInputProps('date')}
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5">
              <div>
                <Input.Label
                  className="text-black font-inter font-normal md:text-base text-sm pb-2"
                  required
                >
                  Lokasi
                </Input.Label>
                <TextInput
                  radius="md"
                  size="lg"
                  placeholder="e.g. Alamat Lengkap"
                  {...form.getInputProps('location')}
                />
              </div>
              <div>
                <Input.Label
                  className="text-black font-inter font-normal md:text-base text-sm pb-2"
                  required
                >
                  Waktu Event
                </Input.Label>
                <TextInput
                  radius="md"
                  size="lg"
                  placeholder="e.g. 08:00 - Selesai"
                  {...form.getInputProps('time')}
                />
              </div>
            </div>
            <div>
              <Input.Label
                className="text-black font-inter font-normal md:text-base text-sm pb-2"
                required
              >
                Deskripsi Event
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
                Upload Poster (4:5)
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
                {loading ? <Loader variant="dots" /> : `Tambah Event`}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default EventPage
