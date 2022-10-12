import { GridColDef } from '@mui/x-data-grid'
import { IDocument } from '../../../entities/document'

export interface IDataGridProps {
  columns: GridColDef[]
  documents: IDocument[]
}
