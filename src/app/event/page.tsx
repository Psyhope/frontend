'use client'
import { EventCard } from '@elements'
import { PlusSquare } from '@icons'
import Image from 'next/image'
import React, { useState, SyntheticEvent, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Input, TextInput, SimpleGrid, FileInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'
import { DatePickerInput } from '@mantine/dates'
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

const EventPage = () => {
  const [isAdmin, setIsAdmin] = useState(true)
  const [opened, { open, close }] = useDisclosure(false)
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState('')

  useEffect(() => {
    if (files) {
      const imageSrc = URL.createObjectURL(files)
      setPreviewUrl(imageSrc)
    } else {
      setPreviewUrl('')
    }
  }, [files])

  const content = ''

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
  })

  const form = useForm({
    initialValues: {
      eventName: '',
      date: null,
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
    form.validate()
    if (!form.isValid()) return
    setLoading(true)
  }

  return (
    <div className="min-h-screen p-5 lg:px-28">
      {/* Hero */}
      <div className="bg-[#D9D6FE] rounded-md flex flex-col-reverse md:flex-row">
        <div className="p-5 lg:p-20">
          <p className="font-inter font-bold text-[#53389E] text-xl md:text-2xl lg:text-6xl">
            Event Mendatang
          </p>
          <p className="font-inter text-xs text-[#1D2939] md:text-base lg:text-lg lg:leading-loose lg:mt-5 mt-2">
            Kami selalu mengadakan acara untuk membantu Anda mempelajari lebih
            lanjut tentang psikologi dan kesehatan mental. Lihat acara mendatang
            kami di bawah ini:
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
        </div>
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
              <DatePickerInput
                dropdownType="modal"
                valueFormat="DD MMM YYYY"
                placeholder="Pilih Tanggal Event"
                radius="md"
                size="lg"
                clearable
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
              Upload Poster
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
              onClick={close}
            >
              Cancel
            </button>
            <button className="w-full py-2 bg-[#7F56D9] text-white font-inter font-bold md:text-base text-sm rounded-lg drop-shadow-lg active:drop-shadow-none">
              Tambah Event
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default EventPage
