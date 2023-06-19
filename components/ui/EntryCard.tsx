import {Typography, Card, CardActionArea, CardContent, CardActions} from '@mui/material'

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom:1}}>
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace:'pre-line'}}>Esto es la descripcion</Typography>
            </CardContent>
            <CardActions sx={{ display:'flex', justifyContent:'end', paddingRight:2}}>
                <Typography variant='body2'>hace 30 min</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
