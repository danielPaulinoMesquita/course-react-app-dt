import {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "./service/api";

interface Transactional {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}
// RactNode this type accepted html tags,
// text and other elements allows on REact
interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transactional[]>([]);

export function TransactionsProvider( {children} : TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transactional[]>([]);

    useEffect(()=>{
        api.get('transactions')
            .then(response => {
                setTransactions(response.data.transactions)
            })
    },[]);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}