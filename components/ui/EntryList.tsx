import { Paper,List } from "@mui/material"
import { EntryCard } from "./"

export const EntryList = () => {
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
                <EntryCard /> 
                <EntryCard /> 
                <EntryCard /> 
            </List>
        </Paper>
    </div>
  )
}
