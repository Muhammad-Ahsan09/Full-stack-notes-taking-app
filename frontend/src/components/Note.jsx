import { Link, useParams } from "react-router-dom";

const Note = ({title, content, noteid, notes, setNotes}) => {

    const params = useParams()
    const userid = params.userid;


    const handleDeleteNote = async (e) => {

        const newnotes = [];

        notes.forEach((note) => {
            if(noteid != note.note_id){
                newnotes.push(note)
            }
        })

        setNotes(newnotes)

        await fetch(`http://localhost:8000/notes/${noteid}`, {
            method: "Delete",
            headers:{"Content-Type" : "application/json"},
        })
    }


    return <>
        <div className="border-2 rounded-md pb-4 border-none shadow-md hover:shadow-xl p-6  hover:-translate-y-7 transition-all">
            <div className="title-section border-b border-slate-500 w-full flex justify-center pb-2 pt-2">
                <b>{title}</b>
            </div>

            <Link to={`/notes/${noteid}`}>
                <div className="max-h-32 overflow-hidden pl-3 pt-3 pr-3">
                    {content}
                </div>
            </Link>
            
            <div className="flex justify-center mt-5 gap" >
                <div className="mr-3">
                    <button className="bg-red-500 text-white rounded px-3 py-1" 
                    onClick={(e) => {handleDeleteNote(e)}}>Delete</button>
                </div>

                <div>
                    <Link to={`/edit/notes/${userid}/${noteid}`}><button className="bg-green-600 text-white rounded px-5 py-1">Edit</button></Link>
                </div>
            </div>

        </div>
    
    </>
}

export default Note;