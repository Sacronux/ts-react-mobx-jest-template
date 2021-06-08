import React from 'react'
import { render } from 'react-dom'
import { StoreProvider } from './store/context'
import TestComponent from './components/TestComponent/TestComponent'

const App = (): JSX.Element => {
    return <div><TestComponent title={'test title'}/></div>
}

const root = document.getElementById('app-root')

render(
    <StoreProvider>
       <App /> 
    </StoreProvider>
    , root)