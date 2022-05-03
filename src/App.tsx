import React from 'react';
import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";


export function App() {
    return (
        <>
            <Header/>
            <h1>Hello world</h1>
            <GlobalStyle/>
        </>
    );
}

