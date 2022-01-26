import React, { useState } from 'react';
import database from '../services/firebase'
import { push, ref } from 'firebase/database'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



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
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               overflow: 'hidden',
               alignItems: 'center',
               my: 3
            }}
         >
            <TextField
               onChange={handleOnChange}
               value={title}
               size="small"
               variant="outlined"
               placeholder="Go to the moon..."
            />
            <Button
               color="primary"
               style={{ backgroundColor: 'transparent', paddingTop: '10px' }} // Disable hover effect on the button
               onClick={addTodo}
               variant="fullfilled"
            > Add Todo
            </Button>
         </Box>

      </>
   );
}
