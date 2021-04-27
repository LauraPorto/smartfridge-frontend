import './App.css';
import './css/main.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Rutas
import Home from './containers/Home/home';
import Profile from './containers/Profile/profile';
import Login from './containers/Login/login';
import Register from './containers/Register/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
