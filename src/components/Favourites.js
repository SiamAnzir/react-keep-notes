import React, {useContext} from "react";
import NotesContext from "../contexts/NoteContext";
import {ViewNotes} from "./ViewNotes";
import {tabContent,navContent,footerContent} from "./Container";
import {methods} from "../methods/Methods";

const Favourites = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const updateNote = ( id , updatedNote) => {
        updatedNote.editing = false;
        setNotes(notes.map(note => (note.id === id ?  updatedNote  : note)));
    }

    const favouriteNotes = [];
    notes.map(note => (note.favourite_note === true && note.trash === false) ? ( favouriteNotes.push(note) ) : ( favouriteNotes ));

    const noteTab = favouriteNotes.map(note => navContent(note));

    const showNotes = favouriteNotes.map(note => tabContent(note,updateNote));

    const footerText = favouriteNotes.map(note => footerContent(note,setNotes,notes,methods.removeFromFavouriteNote,methods.addToTrash,methods.clickUpdateButton));


    return(
        <ViewNotes default={notes[0].id} noteTab={noteTab} showNotes={showNotes} footerText={footerText}/>
    )
}

export default Favourites;