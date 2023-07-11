import { AxiosProgressEvent } from 'axios'

export interface UploadS3 {
  file: File | undefined
  id: number
  type: String
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
}
