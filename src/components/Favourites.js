/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from "react";
import NotesContext from "../contexts/NoteContext";
import {ViewNotes} from "./ViewNotes";
import {tabContent,navContent,footerContent} from "./Container";
import {methods} from "../methods/Methods";

const Favourites = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const favouriteNotes = [];
    notes.map(note => (note.favourite_note === true && note.trash === false) ? ( favouriteNotes.push(note) ) : ( favouriteNotes ));

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = favouriteNotes.filter(note =>
            note.title.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    const updateNote = ( id , updatedNote) => {
        updatedNote.editing = false;
        setNotes(notes.map(note => (note.id === id ?  updatedNote  : note)));
    }

    const noteTab = (searchTerm === "") ? (favouriteNotes.map(note => navContent(note))) : (searchResults.map(note => navContent(note)));


    const showNotes = favouriteNotes.map(note => tabContent(note,updateNote));

    const footerTab = favouriteNotes.map(note => footerContent(note,setNotes,notes,methods.addToTrash,methods.clickUpdateButton,methods.addToFavouriteNote,methods.removeFromFavouriteNote,methods.downloadTxtFile));

    return(
        <ViewNotes default={notes[0].id} noteTab={noteTab} showNotes={showNotes} footerTab={footerTab} searchTerm={searchTerm} handleChange={handleChange}/>
    )
}

export default Favourites;