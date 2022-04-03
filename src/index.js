import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import countReducer from './reducers/countReducer';
import quizStateReducer from './reducers/quizStateReducer';
import questionsReducer from './reducers/questionsReducer';

const container = document.getElementById('root');
const root = createRoot(container);

const rootReducer = combineReducers({
  count: countReducer,
  quiz: quizStateReducer,
  questions: questionsReducer,
});

const store = createStore(rootReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
