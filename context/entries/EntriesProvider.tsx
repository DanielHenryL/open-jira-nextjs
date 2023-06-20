import { FC, PropsWithChildren, useReducer } from 'react'
import { EntriesContext, entriesReducer } from './'
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '@/interfaces'

export interface EntriesState {
    entries:Entry[]
}

const Entries_INITIAL_STATE:EntriesState = {
    entries:[
        {
            _id:uuidv4(),
            description:'Pendiente: Sunt in excepteur magna eu in sunt velit magna culpa do velit reprehenderit.',
            createAt:1687195608108 ,
            status:'pending'
        },
        {
            _id:uuidv4(),
            description:'En-Progreso: Laboris laborum do ipsum sunt consequat laborum.',
            createAt:1687195608108 - 1000000,
            status:'in-progress'
        },
        {
            _id:uuidv4(),
            description:'Terminadas: Est et dolor labore nulla magna ullamco do nulla exercitation aliquip cillum ut Lorem.',
            createAt:1687195608108 - 100000,
            status:'finished'
        },
    ]
}


export const EntriesProvider:FC<PropsWithChildren> = ({children}) => {

  const [ state, dispatch ] = useReducer(entriesReducer, Entries_INITIAL_STATE) 

  const addNewEntry = ( description:string ) => {
    const newEntry:Entry = {
      _id:uuidv4(),
      description:description,
      createAt:Date.now(),
      status:'pending'
    }
    dispatch({type:'[Entry] Add-Entry', payload:newEntry })
  }

  const updateEntry = (entry:Entry) => {
    dispatch({type:'[Entry] Entry-Updated', payload:entry})
  }


  return (
    <EntriesContext.Provider value={{...state , addNewEntry, updateEntry}}>
        {children}
    </EntriesContext.Provider>
  )
}