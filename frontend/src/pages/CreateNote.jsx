import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

const CreateNote = () => {

    const params = useParams()
    const userid = params.userid;

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleFormSubmit = async (e) => {

        e.preventDefault()

        if(!title || !content)
        {
            return alert("All fields are required")
        }
        // setNotes([...notes, {title, content}])

        const res = await fetch(`http://localhost:8000/notes/${userid}`, {
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({title, content})
        })

        const note = await res.json()

        if(!res.ok){
            return alert("Some error occures")
        }

        setTitle("")
        setContent("")
        

    }

    return <>

        <Header/>
    
        <div className="flex justify-center items-center h-screen">
            <div>
                <form className="rounded-lg  w-full pb-6 border-none shadow-md hover:shadow-2xl p-6" onSubmit={(e) => {handleFormSubmit(e)}}>
                    <div>
                        <input placeholder="Title Goes Here" type="text"  className="w-full h-16 pl-10 
                        outline-none border-b-[1.3px]
                        focus:border-blue-500 focus:border-b-[1.5px] border-black transition-all
                        focus:text-xl font-medium" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    </div>

                    <textarea  cols="84" rows="10" placeholder="Content Goes here" className="w-full p-5 rounded-lg outline-none"
                    onChange={(e) => {setContent(e.target.value)}} value={content}>

                    </textarea>

                    <div className="flex justify-center ">
                        <button type="submit" className="bg-blue-500 text-white rounded pl-5 pr-5 pb-2 pt-2 w-10/12">Create</button>
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


export default CreateNote;