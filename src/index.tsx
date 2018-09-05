import * as React from 'react';
import * as ReactDom from 'react-dom';
import './index.scss';
import Hello from "./hello";
const logo = require('./logo.png');
// import './logo.png';

export class Root extends React.Component<{}, {}> {
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

ReactDom.render(
  <Root />,
  document.getElementById('root')
)