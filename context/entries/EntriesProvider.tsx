import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import { EntriesContext, entriesReducer } from './'
import { Entry } from '@/interfaces'
import { entriesApi } from '@/apis';
import { useSnackbar } from 'notistack';

export interface EntriesState {
    entries:Entry[]
}

const Entries_INITIAL_STATE:EntriesState = {
    entries:[],
}


export const EntriesProvider:FC<PropsWithChildren> = ({children}) => {

  const [ state, dispatch ] = useReducer(entriesReducer, Entries_INITIAL_STATE) 
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async( description:string ) => {
    const { data } = await entriesApi.post<Entry>('/entries',{ description:description })
    
    dispatch({type:'[Entry] Add-Entry', payload:data })
  }

  const updateEntry = async(entry:Entry, showSnackbar:boolean = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`,entry)
      dispatch({type:'[Entry] Entry-Updated', payload:data})

      // mostrar un snackbar
      if(showSnackbar){
        enqueueSnackbar('Entrada actualizada', {
          variant:'success',
          autoHideDuration:1500,
          anchorOrigin:{
            vertical: 'bottom',
            horizontal:'left'
          }
        })
      }
    } catch (error) {
      console.log({error})
    }
  }

  const refreshEntries = async() => {
    const {data} = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type:'[Entry] Refresh-Data', payload:data})
  }

  const deleteEntry = async(id:string) => {
    const {data} = await entriesApi.delete<Entry>(`/entries/${id}`)
    dispatch({type:'[Entry] Delete-Data',payload:data})
    enqueueSnackbar('Entrada eliminada', {
      variant:'error',
      autoHideDuration:1500,
      anchorOrigin:{
        vertical: 'bottom',
        horizontal:'left'
      }
    })

  }

  useEffect(() => {
    refreshEntries()
  }, [])
  

  return (
    <EntriesContext.Provider value={{...state , addNewEntry, updateEntry, deleteEntry}}>
        {children}
    </EntriesContext.Provider>
  )
}