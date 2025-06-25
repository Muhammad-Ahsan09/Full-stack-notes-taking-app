import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header"

const FullView = () => {

    const [note, setNote] = useState({})
    const params = useParams()

    const noteid = params.noteid;

    useEffect(() => {

        const fetchNote = async () => {
            const note = await fetch(`http://localhost:8000/note/${noteid}`)
            setNote(await note.json())
        }

        fetchNote()
        
    }, [])
    
    return <>
    <Header />

    <div className="flex justify-center items-center h-screen ">
        <div className="border-2 border-black rounded h-full w-2/3  overflow-scroll border-none shadow-md hover:shadow-2xl p-6">
            <div className="flex justify-center text-2xl  border-b border-slate-500 w-full pb-2 pt-2  mb-8">
                <b>{note.title}</b>
            </div>

            <div className="pl-8 pr-8">
                <p>{note.content}</p>
            </div>
            
        </div>
    </div>
    </>
}

export default FullView;