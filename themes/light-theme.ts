import { createTheme } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette:{
      mode:'light',
      background:{
        default:grey[300]
      },
      primary:{
        main:blue[200]
      },
      secondary:{
        main:blue[600]
      },
      error:{
        main:red.A400
      }
    },
    components:{
      MuiAppBar:{
        defaultProps:{
          elevation:0,
          color:'secondary'
        },
        styleOverrides:{
          root:{
            backgroundColor:blue[700],
          }
        }
      }
  }
});