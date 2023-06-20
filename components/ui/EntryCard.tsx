import { FC, DragEvent, useContext } from 'react'
import { Card, CardActionArea, CardContent, CardActions,Typography} from '@mui/material'
import { Entry } from '@/interfaces'
import { UIContext } from '@/context/ui'

interface Props{
  entry:Entry
}

export const EntryCard:FC<Props> = ({entry}) => {

  const {StartDragging, EndDragging} = useContext( UIContext)

  const onDragStart = (event:DragEvent) => {
    event.dataTransfer.setData('text', entry._id)
    StartDragging();
  }
  const onDragEnd = () => {
    EndDragging();
  }
  return (
    <Card sx={{ marginBottom:1}} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}> 
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display:'flex', justifyContent:'end', paddingRight:2}}>
          <Typography variant='body2'>{entry.createAt}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
