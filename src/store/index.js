import { createStore, combineReducers } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "@redux-devtools/extension";


// Корневой reducer
const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer
})


	// Создание стора
export const store = createStore(rootReducer, composeWithDevTools())