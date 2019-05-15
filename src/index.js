import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './components/App/App';

const test = "1"
ReactDOM.render(<App />, document.getElementById('app'));
=======
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './components/App/AppContainer';
>>>>>>> a2ccdb49b50961106a5391e1da2066aebc5c47c2

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
