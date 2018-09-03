import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import logo from './logo.png';

ReactDom.render(
    <div>Hello world
        <img src={logo} />
    </div>,
    document.getElementById("root")
);
