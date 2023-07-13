export interface Props {
  open: () => void
  close: () => void
  opened: boolean
  tipe: 'Artikel' | 'Infografik' | 'Event'
  judul: string
  handleDelete: () => Promise<void>
}
