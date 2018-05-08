import HelloComponent from './components/hello/hello';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <HelloComponent />,
    document.getElementById('root')
);

if(module['hot']){
    module['hot'].accept();
}