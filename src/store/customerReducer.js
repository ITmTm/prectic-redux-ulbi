
const defaultState = {
	customers: []
}


	// Рефакторинг вынос отдельных actions в отдельные константы
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';

// состояние с массивом
export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MANY_CUSTOMERS:
			return {...state, customers: [...state.customers, ...action.payload]}
		case ADD_CUSTOMER:
			return {...state, customers: [...state.customers, action.payload]}
		case REMOVE_CUSTOMERS:
			return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
		default:
			return state
	}
}


	// Создание createActions
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload});