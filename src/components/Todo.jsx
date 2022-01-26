import React from 'react';
import { ref, update } from 'firebase/database'
import database from '../services/firebase'
import { Box } from '@mui/material';


export default function Todo({ todo }) {


   const toogleStatus = () => {
      const db = database;
      update(ref(db, '/todos/' + todo.id), { ...todo, completed: !todo.completed })
   }
   return (
      <Box
         sx={{
            p: '3px'
         }}
      >
         - <span className={todo.completed ? 'line-through-class' : ''}
            onClick={toogleStatus}
         >
            {todo.title}
         </span>

      </Box >
   );
}
