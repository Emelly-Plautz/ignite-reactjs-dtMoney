import { useEffect, useState } from 'react'
import { SearchForme } from '../SearchForm'
import { PriceHighlight, TableContainer, TransationTable } from './styles'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createAT: string
}

export function Table() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TableContainer>
      <SearchForme />
      <TransationTable>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createAT}</td>
              </tr>
            )
          })}
        </tbody>
      </TransationTable>
    </TableContainer>
  )
}
