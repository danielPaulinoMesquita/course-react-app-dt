import Modal from "react-modal";
import React, {FormEvent, useState} from "react";
import {Container,TransactionTypeContainer, RadioBox} from "./styles";
import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';

interface NewTransactionalModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionalModal({isOpen, onRequestClose}: NewTransactionalModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction( event: FormEvent ) {
        event.preventDefault();
        console.log({ title, value, category, type })
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'>
            <Container onSubmit={handleCreateNewTransaction}>
                <button
                    type='button'
                    onClick={onRequestClose}
                    className='react-modal-close'>
                    <img src={closeImg} alt='Fechar Modal'/>
                </button>
                <h2>Cadastro Transação</h2>
                <input
                    placeholder='Titulo'
                    value={title}
                    onChange={ event => setTitle(event.target.value)}/>
                <input
                    type='number'
                    placeholder='Valor'
                    value={value}
                    onChange={ event => setValue(Number(event.target.value))}/>
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
                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={ event => setCategory(event.target.value)}/>
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}