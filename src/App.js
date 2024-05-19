import { useDispatch, useSelector } from "react-redux";

function App() {
	const dispatch = useDispatch();	// Это функция для изменения состояния
	const cash = useSelector(state => state.cash.cash);	// Получение состояния
	const customers = useSelector(state => state.customers.customers)

	const addCash = (cash) => {
		dispatch({type: "ADD_CASH", payload: cash})	// Изменяем состояние
	}

	const getCash = (cash) => {
		dispatch({type: "GET_CASH", payload: cash});
	}

	const addCustomer = (name) => {
			// Объект пользователя
		const customer = {
			name,
			id: Date.now()
		}
		dispatch({type: "ADD_CUSTOMER", payload: customer})
	}

	const removeCustomer = (customer) => {
		dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
	}


	return (
	  <div className={'app'}>
		  <div style={{fontSize: "3rem", marginBottom: 30}}>Баланс: {cash}</div>
		  <div className={'buttons'}>
			  <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
			  <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
			  <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
			  <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
		  </div>
		  {customers.length > 0 ?
			  <div>
				  {customers.map(customer =>
					  <div
						  onClick={() => removeCustomer(customer)}
						  style={{
						  fontSize: "2rem",
						  border: "1px solid black",
						  padding: 10,
						  marginTop: 15,
						  backgroundColor: "rgb(229 129 179 / 50%)"
					  }}
					  >
						  {customer.name}
					  </div>
				  )}
			  </div>
			  :
			  <div style={{fontSize: "2rem", marginTop: 20}}>
				  Клиенты отсуствуют!
			  </div>
		  }
	  </div>
  );
}

export default App;
