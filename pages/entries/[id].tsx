import { useState, ChangeEvent, useMemo, FC, useContext } from 'react'
import { GetServerSideProps } from 'next'
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Entry, EntryStatus } from '@/interfaces';
import { Layout } from '@/components/layouts'
import { dbEntries } from '@/database';
import { EntriesContext } from '@/context/entries';
import { useRouter } from 'next/router';
import { dateFunctions } from '@/utils';

const validStatus:EntryStatus[] = ['pending','in-progress','finished']

interface Props {
    entry:Entry
}

const EntryPage:FC<Props> = ({entry}) => {

    const {updateEntry, deleteEntry} = useContext( EntriesContext )
    const router = useRouter()
    const [inputValue, setInputValue] = useState(entry.description)
    const [status, setStatus] = useState<EntryStatus>(entry.status)
    const [touched, setTouched] = useState(false)

    const isNotValue = useMemo( () => inputValue.length <= 0 && touched ,[inputValue, touched])

    const onInputValueChanged = ( event:ChangeEvent<HTMLInputElement> ) => {
        setInputValue( event.target.value )
    }

    const onStatusChanged = ( event:ChangeEvent<HTMLInputElement> ) => {
        setStatus( event.target.value as EntryStatus)
    }

    const onSave = () => {
        // la mejor opcion
        // const entryUpdate:Entry = {
        //     ...entry,
        //     status,
        //     description:inputValue
        // }

        // mutando
        entry.description = inputValue
        entry.status = status
        updateEntry(entry, true)
        router.push('/')
    }

    const onDelete = () => {
        deleteEntry(entry._id)
        router.push('/')
    }
  return (
    <Layout title={inputValue.substring(0,20) + '...'}>
        <Grid
            container
            justifyContent={'center'}
            sx={{ marginTop:2}}
        >
            <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                <Card>
                    <CardHeader
                        title={`Entrada:`}
                        subheader={`Creada ${ dateFunctions.getFormatDistanceToNow( entry.createdAt )}`}
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
          <DeleteOutlinedIcon onClick={onDelete}/>
        </IconButton>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const { id } = params as { id: string }
    
    const entry  = await dbEntries.getEntryById( id )

    if( !entry){
        return {
            redirect:{
                destination: '/',
                permanent:false
            }
        }
    }

    return {
        props: {
            entry        
        }
    }
}

export default EntryPage
