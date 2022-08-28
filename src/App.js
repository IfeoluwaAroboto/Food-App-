import "./App.css";
import {
BrowserRouter as Router,
Switch,
Route,
Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import dashbord from "./components/dashbord";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Cart from "./components/Cart";
function App() {
return (
	<>
	<Router>
		<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/Login" component={Login} />
		<Route path="/Signup" component={Signup} />
		<Route path="/dashbord" component={dashbord} />
		<Route path="/Profile" component={Profile} />
		<Route path="/Orders" component={Orders} />
		<Route path="/Cart" component={Cart} />
		<Redirect to="/" />
		</Switch>
	</Router>
	</>
);
}

export default App;
