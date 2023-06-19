import { useContext, useMemo, FC } from 'react'
import { Paper,List } from "@mui/material"
import { EntryCard } from "./"
import { EntryStatus } from "@/interfaces"
import { EntriesContext } from '@/context/entries'

interface Props{
  status:EntryStatus;
}

export const EntryList:FC<Props> = ({status}) => {
  const { entries } = useContext( EntriesContext );

  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status), [entries])

  return (
    <div>
        <Paper sx={{ height: 'calc(100vh - 250px)', overflow:'auto', backgroundColor: 'transparent',  "&::-webkit-scrollbar": {
            width: "10px",
            bgcolor: "#454545",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#1976d2",
            border: "7px none #fffff",
            borderRadius: "5px",
          },}}
        >
            {/* Cambiara dependiendo si esto haciendo drag o no */}
            <List sx={{ opacity:1, padding:1}}>
              {
                entriesByStatus.map( entry => (
                  <EntryCard key={entry._id} entry={entry}/> 
                ))
              }
            </List>
        </Paper>
    </div>
  )
}
