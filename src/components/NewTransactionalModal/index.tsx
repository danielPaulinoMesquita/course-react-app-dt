import Modal from "react-modal";
import React from "react";
import {Container} from "./styles";
import closeImg from '../../assets/close.svg'

interface NewTransactionalModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionalModal({isOpen, onRequestClose}: NewTransactionalModalProps) {
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
                <input type='number' placeholder='Categoria'/>
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}