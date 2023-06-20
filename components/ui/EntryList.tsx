import { useContext, useMemo, FC,DragEvent } from 'react'
import { Paper,List } from "@mui/material"
import { EntryCard } from "./"
import { EntryStatus } from "@/interfaces"
import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'
import styles from './EntryList.module.css'

interface Props{
  status:EntryStatus;
}

export const EntryList:FC<Props> = ({status}) => {
  const { entries, updateEntry } = useContext( EntriesContext );
  const { isDragging, EndDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status), [entries]);

  const allowDrop = (event:DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event:DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    const entry = entries.find( e => e._id == id)!;
    entry.status=status
    updateEntry(entry)
    EndDragging()
  };

  return (
    <div onDrop={ onDropEntry } onDragOver={allowDrop} className={ isDragging ? styles.dragging : ''}>
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
            <List sx={{ opacity:isDragging?0.2:1,transition:'all .5s', padding:1}}>
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
