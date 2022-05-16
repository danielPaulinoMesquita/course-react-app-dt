import {Container} from "./styles";
import {Summary} from "../Sumary";
import {TransactionalTable} from "../TransactionalTable";
import React from "react";
import {useTransaction} from "../../hooks/useTransactions";

export function Dashboard() {
    const data = useTransaction();
    console.log('context info: ', data);

    return (
        <Container>
            <Summary/>
            <TransactionalTable/>
        </Container>
    )
}