import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Signup  = () => {
    

    const navigate = useNavigate()


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if(!name || !email || !password){
            return alert("All fields are required")
        }

        const res = await fetch("http://localhost:8000/signup",{
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, password})
        })

        if(!res.ok)
        {
            return alert("an error occured")
        }

        else{
            const user = await res.json()
            navigate(`/${user.user_id}`)
        }
        


        setName("")
        setEmail("")
        setPassword("")

    }
    return <>
        <div className="flex justify-center items-center h-screen">
            <form className="lg:w-2/6 sm:w-11/12 flex justify-center pb-14 rounded-md shadow-xl"
            onSubmit={(e) => {handleFormSubmit(e)}}>
                <div>
                    <div className="flex justify-center mb-5 mt-5">
                        <h1 className=" text-blue-500 text-[32px]"><b>Sign up</b></h1>
                    </div>
                    <div className="mb-10">
                        <input type="text" placeholder="Name" className="h-10 w-80 outline-none border-b-[1.3px]
                        focus:border-blue-500 focus:border-b-[1.5px] border-black 
                        pl-5 " value={name} onChange={(e) => {setName(e.target.value)}}/>
                    </div>

                    <div className="mb-10">
                        <input type="email" placeholder="someone@example.com" className="h-10 w-80 outline-none border-b-[1.3px]
                        focus:border-blue-500 focus:border-b-[1.5px] border-black 
                        pl-5" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </div>

                    <div>
                        <input type="password" className="h-10 w-80 outline-none border-b-[1.3px]
                        focus:border-blue-500 focus:border-b-[1.5px] border-black
                        pl-5" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
                    </div>

                    <div className="flex justify-center mt-6 text-white">
                        <button type="submit" className="submit-button bg-blue-500 w-28 h-10 rounded">Sign up</button>
                    </div>

                    <p className="mt-6 flex justify-center">Already have an account?
                     <Link to="/login">
                         <span className="text-blue-500">Sign in</span>
                         </Link></p>
                </div>
            </form>
        </div>
    </>
}

export default Signup;