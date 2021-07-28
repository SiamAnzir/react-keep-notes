/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from "react";
import {ViewNotes} from "./ViewNotes";
import {tabContent,navContent,footerContent} from "./Container";
import NotesContext from "../contexts/NoteContext";
import {methods} from "../methods/Methods";

const Trash = () => {

    const {notes, setNotes,theme,themeState, setThemeState} = useContext(NotesContext);

    const darkMode = () => {
        setThemeState(theme.dark);
    };
    const lightMode = () => {
        setThemeState(theme.light);
    };

    const trashNotes = [];
    notes.map(note => (note.trash === true) ? ( trashNotes.push(note) ) : ( trashNotes ));

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = trashNotes.filter(note =>
            note.title.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    },[searchTerm]);

    const updateNote = ( id , updatedNote) => {
        updatedNote.editing = false;
        setNotes(notes.map(note => (note.id === id ?  updatedNote  : note)));
    }

    const deleteNote = (noteId) => {
        setNotes(notes.filter((note) => {
            return note.id !== noteId;
        }));
    }

    const noteTab = (searchTerm === "") ? (trashNotes.map(note => navContent(note,deleteNote))) : (searchResults.map(note => navContent(note,deleteNote)));


    const showNotes = trashNotes.map(note => tabContent(note,updateNote,themeState));

    const footerTab = trashNotes.map(note => footerContent(note,setNotes,notes,methods.removeFromTrash,methods.clickUpdateButton,methods.addToFavouriteNote,methods.removeFromFavouriteNote,methods.downloadTxtFile,lightMode,darkMode,themeState.background,theme.light.background,themeState.foreground));

    return(
        <ViewNotes default={notes[0].id} noteTab={noteTab} showNotes={showNotes} footerTab={footerTab} searchTerm={searchTerm} handleChange={handleChange} themeState={themeState}/>
    )
}

export default Trash;
