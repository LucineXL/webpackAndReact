import * as React from 'react';
import { Hello } from '../../components';

import logo from '../../source/image/logo.png';

export default class Root extends React.Component {
    render() {
        const promise = new Promise(((resolve, reject) => {
            console.log('Promise');
            resolve();
        }));
        promise.then(() => {
            console.log('resolved.');
        });
        console.log('Hi!');
        return (
            <div>
            我是 root
                <Hello name="TypeScript" enthusiasmLevel={10} />
                <img src={logo} alt="" />
            </div>
        );
    }
}
