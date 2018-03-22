import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface ButtonProps {
    handleClick(): void;
}
export const Button: React.StatelessComponent<ButtonProps> = (props) => {
    return (
        <button onClick={props.handleClick}>Send</button>
);
}