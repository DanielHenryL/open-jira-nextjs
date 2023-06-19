import { Layout } from "@/components/layouts";
import { Typography, Grid, Card, CardHeader } from "@mui/material";


export default function Home() {
  return (
    <Layout title="OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}> 
            <CardHeader title='Pendientes'/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title='En Progreso'/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title='Terminadas'/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
