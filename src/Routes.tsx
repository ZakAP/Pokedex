import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "pages/Home"
import { Details } from "pages/Details"
import { DefaultTheme } from "styled-components"

interface RouterProps {
  toggleTheme: () => void,
  theme: DefaultTheme
}


const Router = ({toggleTheme, theme} : RouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home toggleTheme={toggleTheme} theme={theme}/>} path="/" />
        <Route element={<Details />} path="/:pokemon/details" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
