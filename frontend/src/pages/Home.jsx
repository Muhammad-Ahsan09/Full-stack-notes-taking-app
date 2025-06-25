import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Notes from "../components/Notes";
import { useContext, useEffect, useState } from "react";


const Home = () => {

    const params = useParams()
    const userid = params.userid;
    const [notes, setNotes] = useState([])

    

    useEffect(() => {

        const fetchNotes = async () => {
            const res = await fetch(`http://localhost:8000/notes/${userid}`)
            const jsonresponse = await res.json()
            setNotes(jsonresponse)
            
        
        }

        fetchNotes()


    }, [])

    
    
    return <>
        
        <Header notes={notes} setNotes={setNotes}/>
       
        {
            notes.length === 0 ? <div className="flex justify-center items-center">
                <h1 className="font-bold text-4xl text-gray-400">Your notes should appear here</h1>
            </div>
                : <>
                {/* <div className="flex justify-center items-center mb-5">
                <h1 className="font-bold text-4xl text-gray-400">Hi {userid} These are your notes</h1>
                </div> */}
                <Notes notes={notes} setNotes={setNotes}/>
                </> 
        }
        
        
        <Link to={`/create/${userid}`}>
            <div className="flex justify-center items-center mt-16 mb-20">
                <button className="bg-blue-500 rounded text-white pl-5 pr-5 pt-2 pb-2">Create Note</button>
            </div>
        </Link>
    </>
}

export default Home;