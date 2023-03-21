import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import "./AddBook.scss"

//TODO se mettre sur la bonne catégorie du livre quand in est en mode update
export default function AddBook() {
    let { bookId } = useParams(); // hook pour récupérer le parmètre de la requête
    const [bookData, setBookData] = React.useState({})
    const [categoriesData, setCategoriesData] = useState([])
    const history = useNavigate(); // hook fourni par react routeur

    useEffect(() => {
        axios.get('/categories').then(response => {
            setCategoriesData(response.data)
            setBookData({title:"",
                        categoryId : response.data[0].id});
        })
        .then(() => {
                if (bookId) {
                    axios.get(`/books/${bookId}`).then(response => {
                        setBookData({
                            title: response.data.title,
                            categoryId: response.data.categoryId
                        })
                    })
                }
            })
    }, [bookId]); // pour éviter les boucles infinies

    const handleChange = (event) => {
        let currentState = {...bookData};
        currentState[event.target.name] = event.target.value;
        setBookData(currentState)
    }

    const onSubmit = (event) => {
        if (bookId) { //
            event.preventDefault();
            axios.put(`/books/${bookId}`, {
                ...bookData //objet javascript Book
            }).then(() => {
                //rediriger vers myBooks
                history("/myBooks") // <- react-router
            })
        } else {
            event.preventDefault();
            axios.post('/books', {
                ...bookData
            }).then(() => {
                //rediriger vers myBooks
                history("/myBooks")
            })
        }
    }

    return (
        <div className="container-add-book">
            <h1>{bookId?"Mettre à jour le livre":"Ajouter un livre"}</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Nom du livre</label>
                    <input name="title" type="text" value={bookData.title} onChange={handleChange} className="form-control"></input>
                </div>
                <div>
                    <label>Catégorie du livre</label>
                    <select name="categoryId" value={bookData.categoryId} onChange={handleChange} className="form-select">
                        {categoriesData.map(category => (
                            <option value={category.id} key={category.id}>{category.label}</option>
                        ))}
                    </select>
                </div>
                <div className="container-submit">
                    <input type="submit" value="Valider" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}