import { S3 } from "aws-sdk"
import { NextApiRequest, NextApiResponse } from "next"
// @ts-ignore
import { v4 as uuidv4 } from "uuid"

const uploadFile = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { fileName, fileType } = req.body

    const s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_S3_REGION_NAME,
    })

    const path = "tmp/" + uuidv4() + "." + fileName.split(".").pop()

    const preSignedUrl = s3.getSignedUrl("putObject", {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: path,
      ContentType: fileType,
      Expires: 5 * 60,
    })

    res.status(200).json({
      url: preSignedUrl,
      path,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json(error)
  }
}

export default uploadFile
