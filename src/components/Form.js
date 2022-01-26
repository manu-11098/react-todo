import React, { useState } from 'react';
import database from '../services/firebase'
import { push, ref } from 'firebase/database'
import TextField from '@mui/material/TextField';
import { Button, IconButton, Snackbar, Box, Alert } from '@mui/material/';
import CloseIcon from '@mui/icons-material/Close';




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
         setTitle('')
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
               sx={{
                  width: '250px'
               }}
               onChange={handleOnChange}
               value={title}
               size="small"
               variant="outlined"
               placeholder="Go to the moon..."
               InputProps={{
                  endAdornment: title && (
                     <IconButton
                        onClick={() => setTitle("")}
                     >
                        <CloseIcon />
                     </IconButton>
                  )
               }}
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
