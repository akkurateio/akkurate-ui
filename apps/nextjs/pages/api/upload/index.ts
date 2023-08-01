import { S3 } from "aws-sdk"
import { NextApiRequest, NextApiResponse } from "next"
// @ts-ignore
import { v4 as uuidv4 } from "uuid"

const uploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { fileName, fileType } = req.body

    const s3 = new S3({
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      region: process.env.NEXT_PUBLIC_AWS_S3_REGION_NAME,
    })

    const path = "tmp/" + uuidv4() + "." + fileName.split(".").pop()

    // const preSignedUrl = await s3.getObject({
    //   Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
    //   Key: '',
    //   // Key: path,
    //   // ContentType: fileType,
    //   Expires: 5 * 60,
    // })

    // Get signed url for get an objet on s3 with path = www.example.com/tmp/uuidv4().fileName.split(".").pop()
    const preSignedUrl = await s3.getSignedUrl("getObject", {
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Key: "tmp/28cf5bb5-1efc-4f9f-868d-10c17909566f.png",
      Expires: 5 * 60,
    })

    // const s3FileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION_NAME}.amazonaws.com/${fields.fileName}`

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
