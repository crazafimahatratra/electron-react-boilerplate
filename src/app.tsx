import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';

function render() {
    ReactDOM.render(<Hello/>, document.getElementById('root'));
}

render();