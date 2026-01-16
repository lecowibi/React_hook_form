import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

type logType = {
    email: string,
    password: string
}

const Login = () => {
    const { register, handleSubmit, setError, formState } = useForm<logType>();
    const { errors } = formState
    const navigate = useNavigate()

    const [togglePassword,setTogglePassword]=useState(true);

    const onSubmit = async (data: logType) => {
        try {
            const res = await axios.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`)
            if (res.data.length === 0) {
                setError("password", { type: "manual", message: "Invalid credentials" });
                return;
            }
            alert("Login Successful");
navigate(`/home/${res.data[0].id}`);

            
        }
        catch (error) {
            console.log("Couldn't fetch the details", error);
        }

    }
    return (
        <div>
            <div className="flex justify-center items-center w-full h-full">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col w-lg gap-2 p-4 border-2 border-black shadow-2xl rounded-2xl mt-10">
                    <div className="text-center text-2xl font-bold tracking-wide">
                        Form
                    </div>



                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="john@gmail.com"
                        className="border-2 border-black outline-0 p-1.5"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format",
                            },
                        })}
                    />
                    <p className="text-red-700">{errors.email?.message}</p>


                    <label htmlFor="password">Password</label>
                   <div className="flex justify-between p-1.5 border-2 outline-0 border-black">
                     <input type={togglePassword?"password":"text"} placeholder="john123" className="w-full outline-0" id="password" {...register("password", {
                        required: "Password is required", min: {
                            value: 6,
                            message: "Password must be more than 6 letter"
                        }, pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: "Password shouldn't contain special case"
                        }
                    })} />
                    <p className="cursor-pointer select-none" onClick={()=>setTogglePassword(!togglePassword)}>Show</p>
                   </div>
                    <p className="text-red-700">{errors.password?.message}</p>


                    <button className="p-2 bg-black text-white text-xl w-50 m-auto rounded-lg" type="submit">Submit</button>
                    <p className="text-center text-sm">Didn't have an account? <Link to='/' className="text-blue-700">Signup</Link></p>

                </form>
            </div>

        </div>
    )
}

export default Login