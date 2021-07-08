import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import AuthProvider from './Context/AuthProvider';
function App() {
  return (
    <AuthProvider>
    {/* <h1>Hello</h1> */}
    <Signup/>
    </AuthProvider>
  );
}

export default App;
