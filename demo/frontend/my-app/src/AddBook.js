import {useParams} from "react-router-dom";

export default function AddBook() {
    let {bookId}= useParams();  // useParams est un hook
    if (bookId) {
        return "update book";
    }
    return "add book";
}
