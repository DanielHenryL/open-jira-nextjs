import { Layout } from "@/components/layouts";
import { EntryList } from "@/components/ui";
import { Typography, Grid, Card, CardHeader, CardContent } from "@mui/material";


export default function Home() {
  return (
    <Layout title="OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}> 
            <CardHeader title='Pendientes'/>
            <CardContent>
              <EntryList/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title='En Progreso'/>
            <CardContent>
              <EntryList/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title='Terminadas'/>
            <CardContent>
              <EntryList/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
