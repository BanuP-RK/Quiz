import Quiz from "./components/Quiz"
import { store } from './store/store';
import { Provider } from 'react-redux';


function App() {


  return (
    <>
    <div className="bg-[url('./quiz-bg.jpg')]">
      <Provider store={store} >
        <Quiz/>
      </Provider>
      </div>
     
    </>
  )
}

export default App
