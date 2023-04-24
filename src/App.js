import { Switch,Route } from "react-router-dom/cjs/react-router-dom"
import { ThemeProvider } from "styled-components"
import AboutPage from "./components/AboutPage"
import Main from "./components/Main"
import ProjectPage from "./components/ProjectPage"
import { lightTheme,DarkTheme } from "./components/Themes"
import WorkPage from "./components/WorkPage"
import GlobalStyle from "./globalStyles"

function App() {
  return <>
   <GlobalStyle/>
   <ThemeProvider theme={DarkTheme}>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/projects" component={ProjectPage}/>
      <Route exact path="/work" component={WorkPage}/>
    </Switch>
   </ThemeProvider>
    </>
    
}

export default App

