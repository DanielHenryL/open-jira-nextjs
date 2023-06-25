import { FC, DragEvent, useContext } from 'react'
import { Card, CardActionArea, CardContent, CardActions,Typography} from '@mui/material'
import { Entry } from '@/interfaces'
import { UIContext } from '@/context/ui'
import { useRouter } from 'next/router'
import { dateFunctions } from '@/utils'

interface Props{
  entry:Entry
}

export const EntryCard:FC<Props> = ({entry}) => {

  const {StartDragging, EndDragging} = useContext( UIContext)
  const router = useRouter()
  const onDragStart = (event:DragEvent) => {
    event.dataTransfer.setData('text', entry._id)
    StartDragging();
  }
  const onDragEnd = () => {
    EndDragging();
  }

  const onClick = () => {
    router.push(`/entries/${entry._id}`)
  }

  return (
    <Card sx={{ marginBottom:1}} draggable onDragStart={onDragStart} onDragEnd={onDragEnd} onClick={ onClick }> 
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display:'flex', justifyContent:'end', paddingRight:2}}>
          <Typography variant='body2'>{ dateFunctions.getFormatDistanceToNow( entry.createdAt ) }</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
