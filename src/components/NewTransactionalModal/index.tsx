import Modal from "react-modal";
import React, {useState} from "react";
import {Container,TransactionTypeContainer, RadioBox} from "./styles";
import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';

interface NewTransactionalModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionalModal({isOpen, onRequestClose}: NewTransactionalModalProps) {
    const [type, setType] = useState('deposit');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'>
            <Container>
                <button
                    type='button'
                    onClick={onRequestClose}
                    className='react-modal-close'>
                    <img src={closeImg} alt='Fechar Modal'/>
                </button>
                <h2>Cadastro Transação</h2>
                <input placeholder='Titulo'/>
                <input type='number' placeholder='Titulo'/>
                <TransactionTypeContainer>
                    <RadioBox
                    type='button'
                    onClick={()=>setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor='green'
                    >
                        <img src={incomeImg} alt='Entrada'/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                    type='button'
                    onClick={()=>setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor='red'
                    >
                        <img src={outcomeImg} alt='Saída'/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input type='number' placeholder='Categoria'/>
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}