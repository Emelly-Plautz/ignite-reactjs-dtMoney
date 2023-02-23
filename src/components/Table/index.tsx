import { SearchForme } from '../SearchForm'
import { PriceHighlight, TableContainer, TransationTable } from './styles'

export function Table() {
  return (
    <TableContainer>
      <SearchForme />
      <TransationTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>3/04/2022</td>
          </tr>

          <tr>
            <td width="50%">Aluguel</td>
            <td>
              <PriceHighlight variant="outcome">R$ -1.000,00</PriceHighlight>
            </td>
            <td>Moradia</td>
            <td>10/04/2022</td>
          </tr>

          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighlight variant="outcome">R$ -20,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>20/04/2022</td>
          </tr>
        </tbody>
      </TransationTable>
    </TableContainer>
  )
}
