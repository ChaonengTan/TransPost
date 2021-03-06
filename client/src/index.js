import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
const dotenv = require('dotenv')
dotenv.config({ path: '../' })
const port = process.env.PORT || 8000

export const client = new ApolloClient({
  // uri: `http://localhost:${port}/graphql`,
  uri: 'https://transpostmern.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
