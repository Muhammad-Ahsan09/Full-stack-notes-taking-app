import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";


const EditNote = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const params = useParams()
    const userid = params.userid;
    const noteid = params.noteid;


    useEffect(() => {

        const fetchNote = async () => {
            const res = await fetch(`http://localhost:8000/note/${noteid}`)
            const note = await res.json();

            setTitle(note.title)
            setContent(note.content)
        }

        fetchNote()
       
    }, [])

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:8000/note/${noteid}`, {
            method: "Put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, content})
        })

        if(res.ok){
            alert("Edit successfull")
        }

    }

    return <>
        <Header/>
        <div className="flex justify-center items-center h-screen">
            <div>
                <form className="rounded-lg  w-full pb-6 border-none shadow-xl  p-6" onSubmit={(e) => {handleFormSubmit(e)}}>
                    <div className="">
                        <input placeholder="Title Goes Here" type="text"  className="w-full h-16 pl-10 
                        outline-none border-b-[1.3px]
                        focus:border-blue-500 focus:border-b-[1.5px] border-black transition-all
                        focus:text-xl font-medium" onChange={(e) => {setTitle(e.target.value)}} value={title} />
                    </div>

                    <textarea cols="84" rows="10" className="w-full p-5 rounded-lg outline-none"
                    onChange={(e) => {setContent(e.target.value)}} value={content} 
                    >

                    </textarea>

                    <div className="flex justify-center ">
                        <button type="submit" className="bg-blue-500 text-white rounded pl-5 pr-5 pb-2 pt-2 w-10/12">Confirm</button>
                    </div>
                </form>

                <Link to={`/${userid}`}>
                    <div className="flex justify-center items-center mt-8">
                        <button className="bg-blue-500 text-white pl-5 pr-5 pt-2 pb-2 rounded">Home</button>
                    </div>
                </Link>

            </div>
        </div>
    </>
}


export default EditNote;