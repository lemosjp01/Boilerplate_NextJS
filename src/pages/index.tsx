import { DataGrid } from '@mui/x-data-grid'
import Main from 'components/Main'
import { useEffect, useCallback, useState, useMemo } from 'react'
import { IDocument } from '../../entities/document'

export default function Home() {
  const [documents, setDocuments] = useState<IDocument[]>([])

  const columns = useMemo(
    () =>
      documents.length > 1
        ? Object.keys(documents[0]).map((value) => {
            return {
              field: value,
              headerName: value,
              width: 180
            }
          })
        : [],
    [documents]
  )
  columns.shift()

  const getDocuments = useCallback(async () => {
    const response = await fetch('/api/documents')
      .then((res) => res.json())
      .catch((error) => console.error(error))

    setDocuments(response.data)
  }, [])

  useEffect(() => {
    getDocuments()
  }, [])

  return (
    <DataGrid columns={columns} rows={documents} getRowId={({ Id }) => Id} />
  )
}
