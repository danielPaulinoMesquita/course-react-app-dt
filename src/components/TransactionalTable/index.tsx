import {Container} from "./styles";
import {useContext, useEffect, useState} from "react";
import {api} from "../../service/api";
import {TransactionsContext} from "../../TransactionsContext";

interface Transactional {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionalTable(){
    const data = useContext(TransactionsContext);
    const [transactions, setTransactions] = useState<Transactional[]>([]);

    useEffect(()=>{
        api.get('transactions')
            .then(response => {
                setTransactions(response.data.transactions)
            })
    },[]);

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