import { useDispatch, useSelector } from "react-redux";

function App() {
	const dispatch = useDispatch();	// Это функция для изменения состояния
	const cash = useSelector(state => state.cash.cash);	// Получение состояния

	const addCash = (cash) => {
		dispatch({type: "ADD_CASH", payload: cash})	// Изменяем состояние
	}

	const getCash = (cash) => {
		dispatch({type: "GET_CASH", payload: cash});
	}


	return (
	  <div className={'app'}>
		  <div style={{fontSize: "3rem", marginBottom: "10px"}}>Баланс: {cash}</div>
		  <div className={'buttons'}>
			  <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
			  <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
		  </div>
	  </div>
  );
}

export default App;
