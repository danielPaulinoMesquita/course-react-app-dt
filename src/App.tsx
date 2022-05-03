import React from 'react';
import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";


export function App() {
    return (
        <>
            <Header/>
            <Dashboard/>
            <h1>Hello world</h1>
            <GlobalStyle/>
        </>
    );
}

