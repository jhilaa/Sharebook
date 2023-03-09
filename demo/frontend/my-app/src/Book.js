import React from 'react';
import bookImg from './book.png'

export default class Book extends React.Component {
    //TODO ? (pas dans le repo du cours)
    /*
    constructor() {
        super();
    }
     */

    render () { // props en paramètres
        return (
            <div className="book">
                <div className="book-image">
                    <img src={bookImg} alt={"BookImg"}/>
                </div>
                <div> Titre : {this.props.title}</div>
                <div> Categorie : {this.props.category}</div>
            </div>
            )
    }
}

