// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import reducers from './reducers';

import Home from "./pages/HomePage";
import UrlDetailsPage from "./pages/UrlDetailsPage";
import NotFoundPage from './pages/NotFoundPage';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
        <Route path="/u/:id/details" component={UrlDetailsPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	</Provider>,
  document.querySelector('#root')
);
