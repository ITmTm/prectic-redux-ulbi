import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";


// Корневой reducer
const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer
})


	// Создание стора
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))