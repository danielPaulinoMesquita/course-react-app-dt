import Modal from "react-modal";
import React from "react";

interface NewTransactionalModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionalModal({isOpen, onRequestClose}: NewTransactionalModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}>
            <h2>Cadastro Transação</h2>
        </Modal>
    )
}