import database from '../services/firebase'
import { ref, onValue } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import Todo from '../components/Todo'

export default function TodoList() {
   const [todoList, setTodoList] = useState()

   const db = database;
   useEffect(() => {
      onValue(ref(db, '/todos'), (snapshot) => {
         const todos = [];
         for (let id in snapshot.val()) {
            todos.push({ id, ...snapshot.val()[id] })
         }
         setTodoList(todos)
      })
   }, [])

   return (
      <>
         {todoList ? todoList.map((todo, index) => <Todo todo={todo} key={index} />) : ""}
      </>
   )
}
