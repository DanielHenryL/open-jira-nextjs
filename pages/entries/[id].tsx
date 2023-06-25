import { useState, ChangeEvent, useMemo, FC } from 'react'
import { GetServerSideProps } from 'next'
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { EntryStatus } from '@/interfaces';
import { Layout } from '@/components/layouts'
import mongoose from 'mongoose';

const validStatus:EntryStatus[] = ['pending','in-progress','finished']

interface Props {
    age:number
}

const EntryPage:FC<Props> = (props) => {
    console.log({props})

    const [inputValue, setInputValue] = useState('')
    const [status, setStatus] = useState<EntryStatus>('pending')
    const [touched, setTouched] = useState(false)

    const isNotValue = useMemo( () => inputValue.length <= 0 && touched ,[inputValue, touched])

    const onInputValueChanged = ( event:ChangeEvent<HTMLInputElement> ) => {
        setInputValue( event.target.value )
    }

    const onStatusChanged = ( event:ChangeEvent<HTMLInputElement> ) => {
        setStatus( event.target.value as EntryStatus)
    }

    const onSave = () => {
        console.log({inputValue, status})
    }
  return (
    <Layout title='.... ....  ..... '>
        <Grid
            container
            justifyContent={'center'}
            sx={{ marginTop:2}}
        >
            <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                <Card>
                    <CardHeader
                        title={`Entrada:${inputValue}`}
                        subheader='Creada hace: ... minutos'
                    />
                    <CardContent>
                        <TextField
                            sx={{ marginY:1}}
                            fullWidth
                            placeholder='Nueva Entrada'
                            autoFocus
                            multiline
                            label='Nueva entrada'
                            value={ inputValue }
                            onChange={ onInputValueChanged }
                            helperText={ isNotValue && 'Ingrese un valor'}
                            onBlur={ () => setTouched(true)}
                            error={ isNotValue }
                        />

                        <FormControl>
                            <FormLabel sx={{ marginTop:1}}>Estado: </FormLabel>
                            <RadioGroup row value={status} onChange={onStatusChanged}>
                                {
                                    validStatus.map( option => (
                                        <FormControlLabel
                                            key={option}
                                            value={option}
                                            control={<Radio/>}
                                            label={capitalize(option)}
                                        />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button
                            startIcon={ <SaveOutlinedIcon/> }
                            variant='contained'
                            fullWidth
                            onClick={ onSave }
                            disabled={ inputValue.length <= 0 }
                        >
                            Guardar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        <IconButton sx={{
            position:'fixed',
            bottom:30,
            right:30,
            backgroundColor:'error.dark'

        }}>
          <DeleteOutlinedIcon/>
        </IconButton>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const { id } = params as { id: string }
    
    if( !mongoose.isValidObjectId(id)){
        return {
            redirect:{
                destination: '/',
                permanent:false
            }
        }
    }

    return {
        props: {
            id        
        }
    }
}

export default EntryPage
