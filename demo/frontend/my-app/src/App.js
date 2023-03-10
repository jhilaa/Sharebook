import {Route} from 'react-router';
import {Routes} from 'react-router-dom';
import MyBooks from './MyBooks';
import ListBooks from './ListBooks';
import AddBook from './AddBook';
import MyBorrows from './MyBorrows';
import Login from './Login';
import AddUser from './AddUser';
import Header from './Header'
import axios from 'axios'
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  /*
  useEffect(() => {
    axios.interceptors.request.use(function (request) {
      const token = sessionStorage.getItem(AUTH_TOKEN_KEY)
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request
    }, (error) => {
      return Promise.reject(error);
    });
  });
  */

  return (
      <div>
          <Header />
        <div className="App">
          <Routes>
            <Route path="listBooks" element={<ListBooks/>} />
            <Route path="myBooks" element={<MyBooks />} />
            <Route path="addBook" element={<AddBook />} />
            <Route path="addBook/:bookId" element={<AddBook />} />
            <Route path="myBorrows/" element={<MyBorrows />} />
            <Route path="login/" element={<Login />} />
            <Route path="addUser/" element={<AddUser />} />
          </Routes>
        </div>
      </div>)
}
export default App