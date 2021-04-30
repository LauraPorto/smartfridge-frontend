import './App.css';
import './css/main.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Rutas
import Home from './containers/Home/home';
import Profile from './containers/Profile/profile';
import Register from './containers/Register/register';
import Store from './containers/Store/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path='/register' exact component={Register}/> 
          <Route path='/store' exact component={Store}/> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
