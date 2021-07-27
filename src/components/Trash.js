/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from "react";
import {ViewNotes} from "./ViewNotes";
import {tabContent,navContent,footerContent} from "./Container";
import NotesContext from "../contexts/NoteContext";
import {methods} from "../methods/Methods";

const Trash = () => {

    const {notes, setNotes} = useContext(NotesContext);

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

    const noteTab = searchResults.map(note => navContent(note));

    const showNotes = trashNotes.map(note => tabContent(note,updateNote));

    const footerTab = trashNotes.map(note => footerContent(note,setNotes,notes,methods.removeFromTrash,methods.clickUpdateButton,methods.addToFavouriteNote,methods.removeFromFavouriteNote));

    return(
        <ViewNotes default={notes[0].id} noteTab={noteTab} showNotes={showNotes} footerTab={footerTab} searchTerm={searchTerm} handleChange={handleChange}/>
    )
}

export default Trash;

/**
 const noteTab = notes.map(note => (note.trash === true) ? (
 navContent(note.id , note.title)
 ) : (
 <div></div>
 ));
 const showNotes = notes.map(note => (note.trash === true) ? (
 tabContent(note.id , note.title , note.description)
 ) : (
 <div></div>
 ));
 const footerText =  notes.map(note => (note.trash === true) ? (
 footerContent(note.id,note,setNotes,notes,methods.addToFavouriteNote,methods.removeFromTrash)
 ) : (
 <div></div>
 ));**/