import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {api} from "../service/api";

interface Transactional {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// three ways for create a type of props, using the more usual(interface or type)
// or using Omit and Pick like the following line

// First way to create a type for properties
interface TransactionalInput {
    title: string,
    amount: number,
    category: string,
    type: string
}

// Second way to create a type for properties
// Omit get all attributes from Transactional and omit some attributes
type TransactionalInputOmit = Omit<Transactional, 'id' | 'createdAt'>

// Third way to crete a type for properties, using Pick
// Pick get all attributes that are describes
type TransactionalInputPick = Pick<Transactional, 'title' | 'amount' | 'type' | 'category'>

// RactNode this type accepted html tags,
// text and other elements allows on REact
interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transactional[];
    createNewTransaction: (transaction: TransactionalInput) => void;
}
//createTransaction is void because the method createNewTransaction doesn't will returns anything.

const TransactionsContext = createContext<TransactionContextData>( { } as TransactionContextData);

export function TransactionsProvider( {children} : TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transactional[]>([]);

    useEffect(()=>{
        api.get('transactions')
            .then(response => {
                setTransactions(response.data.transactions)
            })
    },[]);

    // Name of function must be equal name declared on TransactionContextData
    async function createNewTransaction(transactionalInput: TransactionalInput) {
       const response = await api.post('/transactions', transactionalInput);
       const { transaction } = response.data;

       setTransactions([
           ...transactions,
           transaction,
       ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createNewTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

// Turn context into hooks
export function useTransaction() {
    return useContext(TransactionsContext);
}