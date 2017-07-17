const appCSS = require('./style/style.css');
import {render} from 'react-dom';
import App from './components/App';
import store from './redux/store/config';
import React  from 'react';
import {Provider} from 'react-redux';

render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));