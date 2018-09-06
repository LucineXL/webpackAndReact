import * as React from 'react';
import Hello from '../../components/Hello';

const logo = require('../../source/image/logo.png');

export default class Root extends React.Component<{}, {}> {
    render() {
        return (
          <div>
            我是 root
            <Hello name="TypeScript" enthusiasmLevel={10} />
            <img src={logo} />
          </div>
        )
    }
}