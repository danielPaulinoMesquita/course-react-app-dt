import {Container} from "./styles";
import {Summary} from "../Sumary";
import {TransactionalTable} from "../TransactionalTable";
import React, {useContext} from "react";
import {TransactionsContext} from "../../TransactionsContext";

export function Dashboard() {
    const data = useContext(TransactionsContext);

    console.log('context info: ', data);

    return (
        <Container>
            <Summary/>
            <TransactionalTable/>
        </Container>
    )
}