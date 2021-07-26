import React, {useContext} from "react";
import NotesContext from "../contexts/NoteContext";
import {ViewNotes} from "./ViewNotes";
import {tabContent,navContent,footerContent} from "./Container";
import {methods} from "../methods/Methods";

const Notes = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const updateNote = ( id , updatedNote) => {
        updatedNote.editing = false;
        setNotes(notes.map(note => (note.id === id ?  updatedNote  : note)));
    }

    const allNotes = [];
    notes.map(note => (note.trash === false) ? ( allNotes.push(note) ) : ( allNotes ));

    const noteTab = allNotes.map(note => navContent(note));

    const showNotes = allNotes.map(note => tabContent(note,updateNote));

    const footerText =  notes.map(note => footerContent(note,setNotes,notes,methods.addToFavouriteNote,methods.addToTrash,methods.clickUpdateButton));

    return(
        <ViewNotes default={notes[0].id} noteTab={noteTab} showNotes={showNotes} footerText={footerText}/>
    )
}

export default Notes;