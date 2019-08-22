import React from 'react';
import ReactDOM from 'react-dom';
//import IndecisionApp from './components/IndecisionApp';
import IndecisionApp from '../../src/components/IndecisionApp';
import 'normalize.css/normalize.css';
//import './styles/styles.scss';
import '../../src/styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
