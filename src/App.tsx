import React, {useState} from 'react';
import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";
import Modal from "react-modal";
import {NewTransactionalModal} from "./components/NewTransactionalModal";
import { TransactionsContext } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionsContext.Provider value={[]}>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard/>
            <NewTransactionalModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}/>
            <GlobalStyle/>
        </TransactionsContext.Provider>
    );
}

