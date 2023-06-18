import { createTheme } from "@mui/material";
import { blue, red} from "@mui/material/colors";

export const darkTheme = createTheme({
    palette:{
      mode:'dark',
      primary:{
        main:blue[400]
      },
      secondary:{
        main:blue[700]
      },
      error:{
        main:red.A400
      }
    },
    components:{
        MuiAppBar:{
          defaultProps:{
            elevation:0
          },
          styleOverrides:{
            root:{
              backgroundColor:blue[700],
            }
          }
        }
    }
});