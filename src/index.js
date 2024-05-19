import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";

// Создание состояния (чаще всего это объект)
const defaultState = {
	cash: 0
}

// Создание Редьюса
const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_CASH":
			return {...state, cash: state.cash + action.payload}
		case "GET_CASH":
			return {...state, cash: state.cash - action.payload}
		default:
			return state
	}
}

// Создание стора
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </React.StrictMode>
);
