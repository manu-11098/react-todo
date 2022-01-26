import React, { useState } from 'react';
import database from '../services/firebase'
import { push, ref } from 'firebase/database'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { Snackbar, Box, Alert } from '@mui/material/';




export default function Form() {
   const db = database

   const [title, setTitle] = useState('');
   const [alert, setAlert] = useState('');
   const [state] = useState({
      vertical: 'top',
      horizontal: 'center',
   })
   const { vertical, horizontal } = state

   const handleOnChange = (element) => {
      setTitle(element.target.value)
   };

   const toggleAlert = () => {
      setAlert(true);
      setTimeout(() => { setAlert(false); }, 3000);
   }

   const addTodo = () => {
      if (title !== '') {
         const todo = { title, completed: false }
         push(ref(db, '/todos'), todo)
      } else {
         toggleAlert()
      }


   }

   return (
      <>
         {alert === true && <Snackbar
            open={alert}
            message=""
            anchorOrigin={{ vertical, horizontal }}
         >
            <Alert severity="error">Text field can't be empty</Alert>
         </Snackbar>}
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
