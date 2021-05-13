import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home from './views/Home';
import Login from "./views/Login";
import Dashboard from './views/Dashboard';


const App = () => {

  const [showModal, setShowModal] = useState(false);

  return (
		<Router>
			<Navbar handleCreateAcc={() => setShowModal(true)} />
		
			<Switch>
				<Router path='/' exact>
					<Home handleCreateAcc={() => setShowModal(true)} />
				</Router>

				<Router path='/login'>
					<Login />
				</Router>

				<Router path='/dashboard'>
					<Dashboard />
				</Router>
			</Switch>

			<Footer />

			<AccountModal show={showModal} handleClose={() => setShowModal(false)} />
		</Router>
	);
};


export default App;
