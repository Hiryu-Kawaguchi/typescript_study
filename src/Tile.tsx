import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Button} from './Button';

export interface TileProps {
    hello: string;
}
export interface TileState {
    inputValue: string;
    outputValue: string;
    bom: number;
}
export class Tile extends React.Component<TileProps, TileState> {
    constructor(props: TileProps) {
        super(props);
        this.state = {
        inputValue: '',
        outputValue: '',
        bom: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount(): void{
        this.setState({
            bom: 10,
        });
    }
    handleChange(e: any): void {
        this.setState({
        inputValue: e.target.value,
        });
    }
    handleClick(): void {
        this.setState({
        inputValue: '',
        outputValue: this.state.inputValue,
        });
    }
    render() {
        return (
        <div>
            <Input value={this.state.inputValue} handleChange={this.handleChange} />
            <Button handleClick={this.handleClick} />
            <Output hello={this.state.bom} value={this.state.outputValue} />
        </div>
        );
    }
}

interface InputProps {
    value: string;
    handleChange(e: any): void;
  }
  const Input: React.StatelessComponent<InputProps> = (props) => {
    return (
      <input type="text" placeholder="Input Name" value={props.value} onChange={props.handleChange} />
    );
  }
  /* テキストを出力する「Outputコンポーネント」 */
  interface OutputProps {
    hello: number;
    value: string;
  }
  const Output: React.StatelessComponent<OutputProps> = (props) => {
    const value = (props.value !== '') ? <h1>{props.hello}回 {props.value} !</h1> : '';
    return (
      <div>{value}</div>
    );
  }