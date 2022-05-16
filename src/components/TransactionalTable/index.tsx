import {Container} from "./styles";
import {useTransaction} from "../../hooks/useTransactions";

export function TransactionalTable(){
    // destructuring to get only transactions
    const {transactions} = useTransaction();

    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Títulos</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.title}</td>
                    <td className={transaction.type}>
                        {new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(transaction.amount)}
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                        {new Intl.DateTimeFormat('pt-BR').format(transaction.amount)}
                    </td>
                  </tr>
                ))}
                </tbody>
            </table>
        </Container>
    )
}