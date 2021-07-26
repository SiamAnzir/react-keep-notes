import React, {useContext} from "react";
import {ViewNotes} from "./ViewNotes";
import {tabContent,navContent,footerContent} from "./Container";
import NotesContext from "../contexts/NoteContext";
import {methods} from "../methods/Methods";

const Trash = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const updateNote = ( id , updatedNote) => {
        updatedNote.editing = false;
        setNotes(notes.map(note => (note.id === id ?  updatedNote  : note)));
    }

    const trashNotes = [];
    notes.map(note => (note.trash === true) ? ( trashNotes.push(note) ) : ( trashNotes ));

    const noteTab = trashNotes.map(note => navContent(note));

    const showNotes = trashNotes.map(note => tabContent(note,updateNote));

    const footerText = trashNotes.map(note => footerContent(note,setNotes,notes,methods.addToFavouriteNote,methods.removeFromTrash,methods.clickUpdateButton));

    return(
        <ViewNotes default={notes[0].id} noteTab={noteTab} showNotes={showNotes} footerText={footerText}/>
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