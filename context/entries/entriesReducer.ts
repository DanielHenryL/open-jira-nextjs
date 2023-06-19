import { EntriesState } from './';

type EntriesActionType =
|{ type:'[Entries] - ActionName' }

export const entriesReducer = ( state:EntriesState, action:EntriesActionType):EntriesState => {

  switch (action.type) {
    // case 'ActionName':
    //     return {
    //         ...state,
    //     }

    default:
        return state;
  }
}