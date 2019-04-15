import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'


const Links = () => {
    <nav>
        <Link to="/?id=123">Inline</Link>   
        <Link to={{pathname:'/', search:'id=456&x=1'}}>Object</Link>  
    </nav>
}
const App = () => (
<Router>
<div>
    <Links />
    <Route
        path="/">
        render={({ match ,location}) => (
            <div>
                <h1> root </h1>
                <div>{JSON.stringify(match)}</div>
                <div>{JSON.stringify(location)}</div>
            </div>
        )}
    </Route>
</div>
</Router>
)

ReactDOM.render(<App />, document.getElementById('root'));



