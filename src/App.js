import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Alert from 'src/components/Alert';
import Navbar from 'src/components/Navbar';
import { AlertState } from 'src/context/alert/AlertState';
import { FirebaseState } from 'src/context/firebase/FirebaseState';
import About from 'src/pages/About';
import { Home } from 'src/pages/Home/Home';

function App() {
	return (
		<FirebaseState>
			<AlertState>
				<BrowserRouter>
					<Navbar />
					<div className="container pt-4">
						<Alert />
						<Switch>
							<Route path={'/'} exact component={Home} />
							<Route path={'/about'} component={About} />
						</Switch>
					</div>
				</BrowserRouter>
			</AlertState>
		</FirebaseState>


	);
}

export default App;
