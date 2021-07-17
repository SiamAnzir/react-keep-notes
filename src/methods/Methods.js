import React from "react";

export const methods = {
    addToFavouriteNote(noteId,selectedNote,setNotes,notes){
        selectedNote.favourite_note = true;
        setNotes(notes.map(note => (note.id === noteId ? selectedNote : note)));
    },
    addToTrash(noteId,selectedNote,setNotes,notes){
        selectedNote.trash = true;
        setNotes(notes.map(note => (note.id === noteId ? selectedNote : note)));
    },
    removeFromFavouriteNote(noteId,selectedNote,setNotes,notes){
        selectedNote.favourite_note = false;
        setNotes(notes.map(note => (note.id === noteId ? selectedNote : note)));
    },
    removeFromTrash(noteId,selectedNote,setNotes,notes) {
        selectedNote.trash = false;
        setNotes(notes.map(note => (note.id === noteId ? selectedNote : note)));
    }
}