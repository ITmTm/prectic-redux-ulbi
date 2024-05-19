import { useDispatch, useSelector } from "react-redux";

function App() {
	const dispatch = useDispatch();
	const cash = useSelector(state => state.cash);	// Получение состояния

  return (
	  <div className={'app'}>
		  <div style={{fontSize: "3rem"}}>{cash}</div>
		  <div className={'buttons'}>
			  <button>Пополнить счет</button>
			  <button>Снять со счета</button>
		  </div>
	  </div>
  );
}

export default App;
