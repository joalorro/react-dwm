import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' render={(routeProps) => <Home {...routeProps}/>} />
			</Switch>
		</Router>
	);}

export default Routes;
