import {Container} from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import {useContext} from "react";
import {TransactionsContext} from "../../TransactionsContext";

export function Summary(){
    const { transactions } = useContext(TransactionsContext);
    console.log('transactions Summary', transactions)

    const totalDeposits = transactions.reduce((tInitial, tCurrent) => {
        if (tCurrent.type === 'deposit'){
            return tInitial + tCurrent.amount;
        }

        return tInitial;
    },0)

    const totalOutcomeImg = transactions.reduce((tInitial, tCurrent) => {
        if (tCurrent.type === 'withdrawn'){
            return tInitial + tCurrent.amount;
        }

        return tInitial;
    },0)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>{totalDeposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas"/>
                </header>
                <strong>- {totalOutcomeImg}</strong>
            </div>
            <div className="background-total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    )
}