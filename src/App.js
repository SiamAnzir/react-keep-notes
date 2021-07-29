import React, {useContext} from "react";
import {HashRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import useLocalStorage from "./hooks/useLocalStorage";
import {AllNotes} from "./store/AllNotes";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import ScratchPad from "./components/ScratchPad";
import Favourites from "./components/Favourites";
import Trash from "./components/Trash";
import NotesContext from "./contexts/NoteContext";
import {ThemeContext} from "./contexts/ThemeContext";

const App = () => {

    const [notes,setNotes] = useLocalStorage('notes',AllNotes);
    const theme = useContext(ThemeContext);
    const [themeState, setThemeState] = useLocalStorage('theme', theme.light);

    return (
    <>
      <Router basename='/'>
          <Sidebar/>
          <NotesContext.Provider value={{notes,setNotes,theme,themeState,setThemeState}}>
              <Switch>
                  <Route exact path="/addNote" component={AddNote}/>
                  <Route exact path="/scratchPad" component={ScratchPad}/>
                  <Route exact path="/" component={Notes}/>
                  <Route exact path="/favourites" component={Favourites}/>
                  <Route exact path="/trash" component={Trash}/>
                  <Route path="*" component={() => "404 NOT FOUND"} />
              </Switch>
          </NotesContext.Provider>
      </Router>
    </>
  );
}

export default App;
