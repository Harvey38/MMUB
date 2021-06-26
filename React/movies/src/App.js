import Movies from './Components/Movies';
import About from './Components/About';
import Home from './Components/Home';
import Nav from './Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
  <Router>
    <Nav/>
    <Switch> 
    <Route path='/' exact component={Home}/>
    <Route path='/movies' component={Movies}/>
    {/* <Route path='/about' component={About} isAuth={true} /> */}
    <Route path='/about' render={(props)=>(
      <About {...props} isAuth={true}/>
    )}/>
  </Switch>
  </Router>
  );
}

export default App;
