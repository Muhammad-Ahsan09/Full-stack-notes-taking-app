import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
        const handleFormSubmit = async (e) => {
            e.preventDefault();
            try {
                
    
            if( !email || !password){
                return alert("All fields are required")
            }
    
            const res = await fetch("http://localhost:8000/login",{
                method: "POST",
                headers : {"Content-Type": "application/json"},
                body: JSON.stringify({ email, password})
            })

            console.log(!res.ok)

            if(!res.ok)
            {
                return alert("an error occured")
            }

            // const user = await res.json()
            else{
                const user = await res.json()
                // localStorage.setItem("userid", JSON.stringify({userid: user.user_id}))
                navigate(`/${user.user_id}`)
            }
            
    
            setEmail("")
            setPassword("")
            } catch (error) {
                console.log(error.message)
            }
            
        }

   

    return <div className="flex justify-center items-center h-screen">
            <form className="lg:w-2/6 sm:w-11/12 flex justify-center pb-14 rounded-md shadow-xl"
            onSubmit={(e) => {handleFormSubmit(e)}}>
                <div>
                    <div className="flex justify-center mb-5 mt-5">
                        <h1 className=" text-[32px] text-blue-500"><b>Sign in</b></h1>
                    </div>

                    <div className="mb-10">
                        <input type="email" placeholder="someone@example.com" className="h-10 w-80 outline-none border-b-[1.3px]
                        focus:border-blue-500 focus:border-b-[1.5px] border-black
                        pl-5" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </div>

                    <div>
                        <input type="password" className="h-10 w-80 outline-none border-b-[1.3px]
                        focus:border-blue-500 focus:border-b-[1.5px] border-black
                        pl-5"  value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="password"/>
                    </div>

                    <div className="flex justify-center mt-6 text-white">
                        <button type="submit" className="submit-button bg-blue-500 w-28 h-10 rounded">Sign in</button>
                    </div>

                    <p className="mt-6 flex justify-center">Don't have an account? 
                        <Link to="/signup"> 
                            <span className="text-blue-500">Sign up</span>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
}

export default Login;