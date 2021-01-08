import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./components/Error-Boundry";
import {store} from "./store";
import './index.css';
import App from "./components/App/App";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from './components/Bookstore-Service-Context'


const bookstoreService = new BookstoreService()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App/>
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
