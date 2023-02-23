import { Header } from '../Header'
import { Summary } from '../Summary'
import { Table } from '../Table'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <Table />
    </TransactionsContainer>
  )
}
