import {useState, ChangeEvent, useContext} from 'react'
import {Box, Button, TextField} from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { EntriesContext } from '@/context/entries';
export const NewEntry = () => {

  const {addNewEntry} = useContext( EntriesContext)

  const [isAdding, setIsAdding] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const onTextFieldChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onCanceled = () => {
    setIsAdding(false)
    setTouched(false)
  }

  const onSave = () => {
    if( inputValue.length <=0) return;
    addNewEntry(inputValue)
    setInputValue('')
    setIsAdding(false)
    setTouched(false)
  }
  return (
    <Box sx={{ paddingX:3}}>
        {
          isAdding 
          ?(
            <>
              <TextField
                fullWidth
                sx={{ marginTop:2, marginBottom:1}}
                placeholder='Nueva Entrada'
                autoFocus
                multiline
                label='Nueva Entrada'
                helperText={ inputValue.length <=0 && touched && 'Ingrese un valor'}
                error={ inputValue.length <=0 && touched}
                value={inputValue}
                onChange={ onTextFieldChange }
                onBlur={() => setTouched(true)}
              />
              <Box display={'flex'} justifyContent={'space-between'}>
                  <Button variant="outlined" color='error' endIcon={<CancelOutlinedIcon/>} onClick={onCanceled}> 
                      Cancelar
                  </Button>
                  <Button variant="outlined" color="secondary" endIcon={<SaveOutlinedIcon/>} onClick={onSave}> 
                      Guardar
                  </Button>
              </Box>
            </>
          ) 
          :(
            <Button
                variant='outlined'
                fullWidth
                endIcon={<AddBoxOutlinedIcon/>}
                onClick={() => setIsAdding(true)}
            >
                Agregar Entrada
            </Button>
          )
        }
        
    </Box>
  )
}
