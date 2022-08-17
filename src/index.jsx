import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import client from './queries/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);
