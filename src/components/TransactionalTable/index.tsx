import {Container} from "./styles";
import {useEffect, useState} from "react";
import {api} from "../../service/api";

interface Transactional {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionalTable(){
    const [transactions, setTransactions] = useState<Transactional[]>([]);

    useEffect(()=>{
        api.get('transactions')
            .then(response => {
                console.log(response)
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
                    <td className={transaction.type}>{transaction.amount}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                ))}
                </tbody>
            </table>
        </Container>
    )
}