import React, { useState } from 'react';
import database from '../services/firebase'
import { push, ref } from 'firebase/database'

export default function Form() {
   const db = database

   const [title, setTitle] = useState('');

   const handleOnChange = (element) => {
      setTitle(element.target.value)
   };

   const addTodo = () => {
      if (title !== '') {
         const todo = { title, completed: false }
         push(ref(db, '/todos'), todo)
      } else {
         window.alert('Title must be provided')
      }

   }

   return (
      <>
         <input type="text" onChange={handleOnChange} value={title} />
         <button onClick={addTodo}> Add Todo </button>
      </>
   );
}
