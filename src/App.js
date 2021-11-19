import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import {createTheme, ThemeProvider} from '@material-ui/core' //para crear un propio tema
import { purple } from '@material-ui/core/colors'

//CREAR THEME
const myTheme = createTheme( {
  palette: {
    primary: {
      main: '#964B00'
    },
    secondary: purple //imports color object from material ui (implements light, dark, contrasttext, etc)
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400, 
    fontWeightRegular: 500, 
    fontWeightMedium: 600, 
    fontWeightBold: 700, 
  }
})


function App() {
  return (
    <ThemeProvider theme = {myTheme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
