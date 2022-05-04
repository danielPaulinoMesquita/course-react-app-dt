import {Container} from "./styles";
import {useEffect} from "react";
import {api} from "../../service/api";

export function TransactionalTable(){

    useEffect(()=>{
        api.get('transactions')
            .then(response => console.log(response.data))
    },[]);

    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Títulos</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Desenvolvimento de webSite</td>
                    <td className="deposit">R$12000.00</td>
                    <td>Desenvolvimento</td>
                    <td>22/01/2012</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className="withdrawn">- R$7000.00</td>
                    <td>Casa</td>
                    <td>22/01/2012</td>
                </tr>
                </tbody>
            </table>
        </Container>
    )
}