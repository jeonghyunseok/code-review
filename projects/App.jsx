import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';


const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
    </nav>
)

const Home = () => <h1>Home</h1>;
const Menu = () => (
    <div>
        <h1>Menu</h1>
        <nav>
            <Link to="../menu/food"> Food </Link>
            <Link to="../menu/drinks"> Drinks </Link>
            <Link to="../menu/sides"> Sides </Link>
        </nav>
    </div>
)
const App = () => (
    <Router>
        <Links />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        </Switch>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));



