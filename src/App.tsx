import { PokemonStoreProvider } from "global/PokemonStore"
import Router from "Routes"
import { GlobalStyle } from "styles/global"
import { ThemeProvider, DefaultTheme } from "styled-components"

import light from "styles/themes/light"
import dark from "styles/themes/dark"
import usePersistedState from "Util/usePersitedState"

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light)

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <PokemonStoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router toggleTheme={toggleTheme} theme={theme}/>
      </ThemeProvider>
    </PokemonStoreProvider>
  )
}

export default App
