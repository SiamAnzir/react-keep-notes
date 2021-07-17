import React, {useContext} from "react";
import NotesContext from "../contexts/NoteContext";
import {ViewNotes} from "./ViewNotes";
import {tabContent,navContent,footerContent} from "./Container";
import {methods} from "../methods/Methods";

const Favourites = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const favouriteNotes = [];
    notes.map(note => (note.favourite_note === true && note.trash === false) ? ( favouriteNotes.push(note) ) : ( favouriteNotes ) );

    const noteTab = favouriteNotes.map(note => navContent(note.id, note.title));

    const showNotes = favouriteNotes.map(note => tabContent(note.id , note.title , note.description));

    const footerText = favouriteNotes.map(note => footerContent(note.id,note,setNotes,notes,methods.removeFromFavouriteNote,methods.addToTrash));


    return(
        <ViewNotes default={notes[0].id} noteTab={noteTab} showNotes={showNotes} footerText={footerText}/>
    )
}

export default Favourites;