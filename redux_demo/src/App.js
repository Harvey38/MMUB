import './App.css';
import store from './redux/store';
import {Provider} from 'react-redux';
import BallContainer from './BallContainer';
function App() {
  return (
   <Provider store={store} >
     <div className='App'>
       <BallContainer/>
     </div>

   </Provider>
  );
}

export default App;
