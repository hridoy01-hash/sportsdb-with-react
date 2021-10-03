import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SingleTeamDetails from './components/SingleTeamDetails/SingleTeamDetails';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route exact path="/home">
             <Home></Home>
           </Route>
           <Route exact path="/home/:idTeam">
            <SingleTeamDetails></SingleTeamDetails>
           </Route>
           <Route exact path="*">
            <NotFound></NotFound>
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
