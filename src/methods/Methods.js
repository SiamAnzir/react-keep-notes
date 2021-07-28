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
    },
    clickUpdateButton(noteId,selectedNote,setNotes,notes) {
        selectedNote.editing = true;
        setNotes(notes.map(note => (note.id === noteId ? selectedNote : note)));
    },
    downloadTxtFile(note){
        const element = document.createElement("a");
        const file = new Blob([note.title + "\n" + note.description], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = note.created_at +".txt"
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    },
    darkMode(setThemeState,theme){
        setThemeState(theme.dark);
    },
    lightMode(setThemeState,theme){
        setThemeState(theme.light);
    }
}