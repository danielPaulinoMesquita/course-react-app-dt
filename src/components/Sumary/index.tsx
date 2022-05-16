import {Container} from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import {useContext} from "react";
import {TransactionsContext} from "../../TransactionsContext";

export function Summary(){
    const { transactions } = useContext(TransactionsContext);
    console.log('transactions Summary', transactions)

   const summary = transactions.reduce((initial, current) => {
        if(current.type === 'deposit'){
            initial.deposits += current.amount;
            initial.total += current.amount;

        }else {
            initial.withdraws += current.amount;
            initial.total -= current.amount;
        }
        return initial;
   }, {
       deposits:0,
       withdraws:0,
       total:0
   });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency:'BRL',
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency:'BRL',
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="background-total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}