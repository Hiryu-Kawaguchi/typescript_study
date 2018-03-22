/* reactとreact-domの読み込み */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Tile } from './Tile'

ReactDOM.render(
  <Tile hello="Hello" />,
  document.querySelector('.content')
)