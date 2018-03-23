import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Button} from './Button';
import {QuestionList} from './QuestionList';
import {Question} from './Question';

export interface TileProps {
    hello: string;
}
export interface TileState {
    inputValue: string;
    outputValue: Question[];
    id: number;
}
export interface Question{
    id: number;
    title: string;
    is_true: boolean;
}
export class Tile extends React.Component<TileProps, TileState> {
    constructor(props: TileProps) {
        super(props);
        this.state = {
        inputValue: '',
        outputValue: [],
        id: 1,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e: any): void {
        this.setState({
        inputValue: e.target.value,
        });
    }
    handleClick(): void {
        let tmp = this.state.outputValue;
        let nextId = this.state.id + 1;
        let q = new Question(this.state.id, this.state.inputValue);
        tmp.push(q)
        this.setState({
        inputValue: '',
        outputValue: tmp,
        id: nextId,
        });
    }
    render() {
        return (
        <div>
            <h1>アンケート</h1>
            <h2>作成</h2>
            <Input value={this.state.inputValue} handleChange={this.handleChange} />
            <Button handleClick={this.handleClick} />
            <h2>一覧</h2>
            <QuestionList value={this.state.outputValue} />
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
        <input type="text" placeholder="質問文" value={props.value} onChange={props.handleChange} />
    );
}