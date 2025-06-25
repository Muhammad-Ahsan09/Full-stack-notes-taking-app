import { useState } from "react";


const Header = ({notes, setNotes}) => {


    
    // const handleSearchChange = (e) => {
        
    //     console.log("notes clone", notesClone)
    //     const results = notes.filter((note) => {
    //         return note.title.toLowerCase().includes(e.target.value.toLowerCase())
    //     })
    //     setNotes(results)
    // }

 return <>

 
    <div className="bg-blue-500 flex items-center justify-center h-24 mb-10">
        <form>
            <input placeholder="Search for your notes" type="text" className="h-10 lg:w-80 sm:w-2/3 border-2
            outline-none focus:shadow-md shadow-blue-700
        rounded pl-5 "  />
            <button type="submit" className="text-white bg-green-500 rounded h-9 pl-2 pr-2">Search</button>
        </form>
    </div>
 </>
}


export default Header;