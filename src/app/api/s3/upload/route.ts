import { NextResponse, NextRequest } from 'next/server'
import aws from 'aws-sdk'

export async function POST(req: Request) {
  const body = await req.json()
  // return NextResponse.json({ res })

  if (!body.filename) {
    return NextResponse.json(
      { message: 'Please provide a file' },
      { status: 404 }
    )
  }

  aws.config.update({
    accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESS_KEY,
    region: process.env.AWS_BUCKET_REGION,
  })

  const s3 = new aws.S3()

  const Key = `${body.type}/${body.filename}`

  const minSizeFile = 0
  const maxSizeFile = 30 * 1024 * 1024

  const post = s3.createPresignedPost({
    Bucket: process.env.AWS_BUCKET_NAME,
    Fields: {
      Key,
    },
    Expires: 60,
    Conditions: [['content-length-range', minSizeFile, maxSizeFile]],
  })

  return NextResponse.json({ post })
}
