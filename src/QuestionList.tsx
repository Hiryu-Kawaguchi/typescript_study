import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Question} from './Question';

export interface QuestionListProps {
    value: Question[];
}
export class QuestionList extends React.Component<QuestionListProps> {
    constructor(props: QuestionListProps) {
        super(props);
    }
    render() {
        if(this.props.value == []){
            return null;
        }
        const ItemList = this.props.value.map((item) => <li>id: {item.id} 質問文: {item.title}</li>);
        return (
            <div>
            {ItemList}
            </div>
        );
    }
}