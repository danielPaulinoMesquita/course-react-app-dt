import {Container} from "./styles";
import {Summary} from "../Sumary";
import {TransactionalTable} from "../TransactionalTable";
import React from "react";

export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TransactionalTable/>
        </Container>
    )
}