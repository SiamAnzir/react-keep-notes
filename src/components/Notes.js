/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from "react";
import NotesContext from "../contexts/NoteContext";
import {ViewNotes} from "./ViewNotes";
import {tabContent,navContent,footerContent} from "./Container";
import {methods} from "../methods/Methods";

const Notes = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const allNotes = [];
    notes.map(note => (note.trash === false) ? ( allNotes.push(note) ) : ( allNotes ));

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = allNotes.filter(note =>
            note.title.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    const updateNote = ( id , updatedNote) => {
        updatedNote.editing = false;
        setNotes(notes.map(note => (note.id === id ?  updatedNote  : note)));
    }

    const noteTab = searchResults.map(note => navContent(note) );

    const showNotes = allNotes.map(note => tabContent(note,updateNote));

    const footerTab =  notes.map(note => footerContent(note,setNotes,notes,methods.addToTrash,methods.clickUpdateButton,methods.addToFavouriteNote,methods.removeFromFavouriteNote));

    return(
        <ViewNotes default={notes[0].id} noteTab={noteTab} showNotes={showNotes} footerTab={footerTab} searchTerm={searchTerm} handleChange={handleChange}/>
    )
}

export default Notes;