import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Question {
    id: number;
    title: string;
    is_true: boolean;
    constructor(id: number,title: string){
        this.id = id;
        this.title = title;
        this.is_true = false;
    }
}