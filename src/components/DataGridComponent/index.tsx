import React, { FunctionComponent } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { IDataGridProps } from './types'

const DataGridComponent: FunctionComponent<IDataGridProps> = ({
  columns,
  documents
}) => {
  return (
    <DataGrid columns={columns} rows={documents} getRowId={({ Id }) => Id} />
  )
}

export default DataGridComponent
