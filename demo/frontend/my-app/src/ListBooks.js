import React from 'react'
import Book from "./Book";
import "./MyBooks.scss";
import "./ListBooks.scss";

export default class ListBooks extends React.Component {
    constructor() {
        super();  // toujours super dans le constructeur d'un composant
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        //TODO chgt des livres dispo
        this.setState({
            books: [
                {
                    id: 1,
                    category: "bd",
                    title: "asterix",
                },
                {
                    id: 2,
                    category: "bd",
                    title: "tintintin"
                }
            ]
        });
    }

    render() {
        return (
        <div className="container">
            <h1>Livres disponibles</h1>
            <div className="list-container">
                {this.state.books.length === 0 ? <i>Pas de livre dispo</i> : null}
                {this.state.books.map((book, key) => (
                    <div key={key} className="list-book-container">
                        <Book title={book.title} category={book.category}/>
                        <div className="text-center">
                            <button className="btn btn-primary btn-sm">Emprunter</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
    }
}