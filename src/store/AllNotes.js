import { v4 as uuidv4 } from 'uuid';

export const AllNotes = [
    {
        id:uuidv4(),
        title:"Welcome To Keep Notes",
        description: "keep Notes is a free, open-source notes app for the web. It is a demo project only, and does not integrate with any database or cloud. Your notes are saved in local storage and will not be permanently persisted, but are available for download. You can create your note and update it whenever it needs.",
        created_at: "Sat July 03 2021",
        favourite_note: false,
        trash: false,
        editing:false
    },
    {
        id:uuidv4(),
        title:"Features",
        description: "Plain text notes - take notes in an IDE-like environment that makes no assumptions Linked notes - use uuid syntax to link to notes within other notes Theme - light and dark mode available Search notes - easily search all notes No database - notes are only stored in the browser's local storage and are available for download and export to you alone Copy Note - You can copy your note with a single button No tracking or analytics - 'nuff said GitHub integration - self-hosted option is available for auto-syncing to a GitHub repository",
        created_at: "Sun July 27 2021",
        favourite_note: false,
        trash:false,
        editing:false
    }
]

export const scratchPadNote = [
    {
        id:uuidv4(),
        title:"Scratchpad",
        description:"The easiest note to find.",
        editing:false,
        created_at: "Wed July 28 2021"
    }
]