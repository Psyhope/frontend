import { AxiosProgressEvent } from 'axios'

export interface UploadS3 {
  file: File | null
  type: String
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
}
