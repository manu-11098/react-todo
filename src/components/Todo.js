import React, { useState } from 'react';
import { ref, update } from 'firebase/database'
import database from '../services/firebase'

export default function Todo({ todo }) {


   const toogleStatus = () => {
      const db = database;
      update(ref(db, '/todos/' + todo.id), { ...todo, completed: !todo.completed })
   }
   return (
      <div>
         <span className={todo.completed ? 'line-through-class' : ''}
            onClick={toogleStatus}
         >
            {todo.title}
         </span>

      </div >
   );
}
