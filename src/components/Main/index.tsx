import DataGridComponent from 'components/DataGridComponent'
import { FunctionComponent } from 'react'
import * as S from './styles'
import { IProps } from './types'

const Main: FunctionComponent<IProps> = ({ dataGrid }) => {
  const { columns, documents } = dataGrid
  return (
    <S.Wrapper>
      <DataGridComponent columns={columns} documents={documents} />
    </S.Wrapper>
  )
}

export default Main
