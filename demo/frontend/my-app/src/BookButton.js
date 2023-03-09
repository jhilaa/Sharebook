import React from 'react';

export default class BookButton extends React.Component {
    constructor() {
        super();
    }

    render () { // props en paramètres
        return <button>{this.props.title}</button>
    }
}

