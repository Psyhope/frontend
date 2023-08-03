import Image from 'next/image'
import React, { SyntheticEvent, useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import {
  FileInput,
  Input,
  Loader,
  Modal,
  SimpleGrid,
  TextInput,
} from '@mantine/core'
import { Props } from './interface'
import { Edit, Trash } from '@icons'
import { DeleteModal } from '../DeleteModal'
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
import { DatePickerInput, DateTimePicker } from '@mantine/dates'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'
import { useMutation } from '@apollo/client'
import { DELETE_EVENT, UPDATE_EVENT } from '@/actions/event'
import { uploadS3 } from '@utils'
import { notifications } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'

export const EventCard: React.FC<Props> = ({
  isAdmin,
  date,
  description,
  id,
  location,
  posterUrl,
  time,
  title,
  refetch,
}) => {
  const [opened, { open: open, close: close }] = useDisclosure(false)
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false)
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false)

  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState(posterUrl)

  const date2 = new Date(date)

  const [mutateUpdate, {}] = useMutation(UPDATE_EVENT)

  const [mutateDelete, {}] = useMutation(DELETE_EVENT)

  const editor = useEditor({
    editable: false,
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
        class: 'bg-[#F9F5FF] text-xs md:text-base',
      },
    },
  })

  const editor2 = useEditor({
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
      eventName: title,
      date: date,
      location: location,
      time: time,
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
      let posterUrl2 = posterUrl
      if (files) {
        posterUrl2 = await uploadS3({
          file: files,
          type: 'poster',
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
      }

      mutateUpdate({
        variables: {
          updateEventInput: {
            id,
            date: form.values.date,
            description: editor ? editor.getHTML() : '',
            location: form.values.location,
            posterUrl: posterUrl,
            time: form.values.time,
            title: form.values.eventName,
          },
        },
        onCompleted: () => {
          closeEdit()
          notifications.show({
            title: 'Success',
            message: 'Edit Event Successfull',
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
          removeEventId: id,
        },
        onCompleted: () => {
          refetch()
          closeDelete()
          notifications.show({
            title: 'Success',
            message: 'Delete Event Successfull',
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

  const disable =
    form.values.date == null ||
    form.values.location == '' ||
    form.values.eventName == '' ||
    form.values.time == ''

  return (
    <div>
      <button
        className="w-full rounded-lg relative flex-none drop-shadow-xl active:drop-shadow-none"
        onClick={open}
      >
        <div className="w-full aspect-article relative">
          <Image
            alt="Infografis"
            src={posterUrl}
            fill
            className="rounded-t-lg"
          />
        </div>
        <div className="bg-[#D9D6FE] w-full lg:h-[156px] h-[100px] relative rounded-lg -mt-2 lg:p-6 p-2">
          <p className="text-[#53389E] lg:text-xl xl:text-2xl text-sm md:font-bold font-semibold text-start h-full  break-words overflow-hidden">
            {title}
          </p>
        </div>
      </button>
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
        tipe="Event"
        judul={title}
        handleDelete={handleDelete}
        loading={loading}
      />

      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        size="auto"
      >
        <div className="w-full h-full flex flex-col gap-5">
          <p className="font-inter md:text-4xl text-2xl font-bold">{title}</p>
          <div className="flex gap-7 flex-col md:flex-row">
            <div className="relative aspect-article md:w-80 h-30 md:h-auto">
              <Image
                alt="Event Modal Placeholder"
                src={posterUrl}
                className="relative rounded-lg"
                fill
              />
            </div>
            <RichTextEditor editor={editor}>
              <div className="bg-[#F9F5FF] rounded-md md:w-[756px] flex flex-col gap-5 h-auto max-h-[285px] overflow-y-auto scrollbar-hidden">
                <div className="flex gap-5 flex-col md:flex-row">
                  <div className="mt-5 px-5">
                    <p className="text-[#344054] font-inter text-sm font-medium">
                      Tanggal Event
                    </p>
                    <p className="text-base text-[#667085] font-inter">
                      {date2.toLocaleDateString('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="px-5">
                    <p className="text-[#344054] font-inter text-sm font-medium md:mt-5">
                      Waktu Penyelenggaraan
                    </p>
                    <p className="text-base text-[#667085] font-inter">
                      {time}
                    </p>
                  </div>
                </div>
                <div className="px-5">
                  <p className="text-[#344054] font-inter text-sm font-medium">
                    Lokasi
                  </p>
                  <p className="text-base text-[#667085] font-inter">
                    {location}
                  </p>
                </div>
                <div>
                  <p className="text-[#344054] font-inter text-sm font-medium px-5">
                    Detail Acara
                  </p>
                  <RichTextEditor.Content />
                </div>
              </div>
            </RichTextEditor>
          </div>
          <button
            className="w-full px-2 py-2 border border-[#FDA29B] text-[#B42318] bg-white rounded-lg drop-shadow-xl active:drop-shadow-none"
            onClick={close}
          >
            Close
          </button>
        </div>
      </Modal>

      <Modal
        opened={openedEdit}
        onClose={closeEdit}
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
            <RichTextEditor editor={editor2}>
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
              Upload Poster (3:2)
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
                <div className="w-full aspect-article relative">
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
              onClick={closeEdit}
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
  )
}
