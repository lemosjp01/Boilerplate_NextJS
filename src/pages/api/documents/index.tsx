import { NextApiRequest, NextApiResponse } from 'next'
import { documents } from '../../../../mocks/documents'

export default function api(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    data: documents
  })
}
