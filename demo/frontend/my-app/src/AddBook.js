import React from 'react'
import { useParams } from 'react-router-dom'
import "./AddBook.scss"

export default function AddBook() {
    let { bookId } = useParams();
    // le state (la variable et comment on la met à jour)
    const [bookData, setBookData] = React.useState({name: '', categoryId: 1 })

    const categories = [{
        id: 1,
        label: "BD"
    },
        {
            id: 2,
            label: "Roman"
        },
        {
            id: 3,
            label: "Informatique"
        }]

    if (bookId) {
        return "update book"
    }

    const handleChange = (event) => {
        // pour sauvegarder l'état du composant  <- state (props pas fait pour fait pour les trucs dynamique)
        let currentState = {...bookData}; //"copie" de l'objet
        currentState[event.target.name] = event.target.value;
        setBookData(currentState)  // hooks au lieu de setState (qu'on avait avec les classes)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit")
        console.log(bookData)
        // TODO
    }

    return (
            <div className="container-add-book">
                <h1>Ajouter un livre</h1>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Nom du livre</label>
                        <input name="name" type="text" className="form-control" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>Catégorie du livre</label>
                        <select name="categoryId" className="form-control" onChange={handleChange}>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="container-submit">
                        <input type="submit" value='Valider' className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
    )
}