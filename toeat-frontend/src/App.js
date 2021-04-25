import './App.css';
import './css/main.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Rutas
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/profile' exact component={Profile}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
