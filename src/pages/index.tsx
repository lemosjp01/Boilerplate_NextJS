import Main from 'components/Main'
import { useEffect, useCallback, useState, useMemo } from 'react'
import { IDocument } from '../../entities/document'

export default function Home() {
  const [documents, setDocuments] = useState<IDocument[]>([])

  const columns = useMemo(
    () =>
      documents.length > 1
        ? Object.keys(documents[0]).map((value) => {
            console.log('VALUE:', value)
            return {
              field: value,
              headerName: value,
              width:
                value.includes('Issuer') || value.includes('Dealer')
                  ? 36
                  : value.includes('Transaction')
                  ? 170
                  : 80,
              editable: true,
              renderCell: (params: any) =>
                !params.value.includes('img/') ? (
                  <span style={{ color: 'white' }}>{params.value}</span>
                ) : (
                  <img src={params.value} alt={params.value} />
                )
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
    <Main
      dataGrid={{
        columns,
        documents
      }}
    />
  )
}
