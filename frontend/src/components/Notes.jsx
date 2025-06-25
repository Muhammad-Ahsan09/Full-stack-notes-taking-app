import { useState } from "react";
import Note from "./Note";

const Notes = ({notes, setNotes}) => {

    
    return <>
    <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 w-11/12">
            {
                notes.map((note, index) => <Note title={note.title} content={note.content} noteid={note.note_id} 
                key={index} notes={notes} setNotes={setNotes}/>)
            }
        </div>
    </div>
    </>
}

export default Notes;