import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue, indigo } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    primary: {
        main: '#3F51B5',
    },
    // primary: indigo,
    secondary: pink,
  },
  shadows: Array(25).fill('none'),
});