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
            description:'Sunt in excepteur magna eu in sunt velit magna culpa do velit reprehenderit.',
            createAt:Date.now() ,
            status:'pending'
        },
        {
            _id:uuidv4(),
            description:'Laboris laborum do ipsum sunt consequat laborum.',
            createAt:Date.now() - 1000000,
            status:'in-progress'
        },
        {
            _id:uuidv4(),
            description:'Est et dolor labore nulla magna ullamco do nulla exercitation aliquip cillum ut Lorem.',
            createAt:Date.now() - 100000,
            status:'finished'
        },
    ]
}


export const EntriesProvider:FC<PropsWithChildren> = ({children}) => {
  const [ state, dispatch ] = useReducer(entriesReducer, Entries_INITIAL_STATE) 
    
  return (
    <EntriesContext.Provider value={{...state}}>
        {children}
    </EntriesContext.Provider>
  )
}