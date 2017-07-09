const appCSS = require('./style/style.css');
import {render} from 'react-dom';
import Container from './components/Container';
import store from './redux/store/config';
import React  from 'react';
import {Provider} from 'react-redux';

render(
<Provider store={store}>
    <Container />
</Provider>, document.getElementById('root'));