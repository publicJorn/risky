import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'normalize.css'
import theme from './defaultTheme'
import Lobby from './lobby/Lobby'
import Game from 'app/game/Game'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact={true} path="/" component={Lobby} />
        <Route path="/game" component={Game} />
      </Switch>
    </ThemeProvider>
  </>
)

export default App
