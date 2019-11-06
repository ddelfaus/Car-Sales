import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"
import { Provider } from "react-redux";
import { reducer } from './Reducers'

import 'bulma/css/bulma.css';
import './styles.scss';



export const store = createStore(reducer)
console.log(store, "store")

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store = {store}><App /></Provider>, rootElement);
