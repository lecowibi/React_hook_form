import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hook"
import { registerUser } from "../feature/auth/authSlice"

type FormType= {
  Name: string
  email: string
  age: number
  password: string
  cpassword: string
  gender: "male" | "female"
  country: string
  terms: boolean
}

const Form = () => {
  const { register, control, handleSubmit, formState, watch, setError } =
    useForm<FormType>()
  const { errors } = formState

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {  error, user } = useAppSelector((state) => state.auth)

  const [togglePassword, setTogglePassword] = useState(true)

  const onSubmit = (data: FormType) => {
    const { cpassword, ...payload } = data
    dispatch(registerUser(payload))
    alert("Created successfully")
    
  }

  useEffect(() => {
    if (error) {
      setError("email", { message: error })
    }
    
  }, [error, user, navigate, setError])





  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col w-lg gap-2 p-4 border-2 border-black shadow-2xl rounded-2xl mt-10">
          <div className="text-center text-2xl font-bold tracking-wide">
            Form
          </div>
          <div className="flex flex-col gap-2  ">
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" placeholder="eg.john" className="border-2 border-black outline-0 p-1.5" {...register("Name", {
              required: "Name is required", pattern: {
                value: /^[a-zA-Z]+$/i,
                message: "Name must be in letter",
              },
            })} />
            <p className="text-red-700">{errors.Name?.message}</p></div>


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

          <label htmlFor="age">Age</label>
          <input type="number" placeholder="18" className="border-2 outline-0 p-1.5 border-black" id="age" {...register("age", {
            required: "Age is required", min: {
              value: 18,
              message: "Age must be above 18"
            }, max: {
              value: 99,
              message: "Age must be below 99"
            }
          })} />
          <p className="text-red-700">{errors.age?.message}</p>


<label htmlFor="password">Password</label>
        <div className="border-2  flex justify-between p-1.5 border-black">
            
          <input type={togglePassword?"password":"text"} placeholder="john123" className="outline-0 w-full  " id="password" {...register("password", {
            required: "Password is required", min: {
              value: 6,
              message: "Password must be more than 6 letter"
            }, pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Password shouldn't contain special case"
            }
          })} />
          <p className="hover:cursor-pointer select-none" onClick={()=>setTogglePassword(!togglePassword)}>show</p>
        </div>
          <p className="text-red-700">{errors.password?.message}</p>
          <label htmlFor="cpassword">Confirm Password</label>

          <input
            type={togglePassword?"password":"text"}
            placeholder="john123"
            className="border-2 outline-0 p-1.5 border-black"
            id="cpassword"
            {...register("cpassword", {
              disabled: watch("password") === "",
              required: "Confirm password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Password should not contain special characters",
              },
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />

          <p className="text-red-700">{errors.cpassword?.message}</p>

          <div className="flex gap-4">
            <label htmlFor="gender">Gender:</label>
            <div>
              <input type="radio" value="male" {...register("gender", { required: "Gender is required" })} />
              <span>Male</span>
            </div>
            <div>
              <input type="radio" value="female" {...register("gender", { required: "Gender is required" })} />
              <span>Female</span>
            </div>


          </div>
          <p className="text-red-700">{errors.gender?.message}</p>

          <select  {...register("country", { required: "Country is required" })}>
            <option value="">Select Country</option>
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
            <option value="China">China</option>

          </select>
          <p className="text-red-700">{errors.country?.message}</p>


          <div className="flex gap-2">
            <input type="checkbox" {...register("terms", { required: true })} />
            <span>Accept terms and condition</span>
          </div>

          <p className="text-red-700">{errors.terms?.message}</p>

          <button className="p-2 bg-black text-white text-xl w-50 m-auto rounded-lg" type="submit">Submit</button>
          <p className="text-sm text-center">Already have an account? <Link to='/login' className="text-blue-700">Login</Link></p>


        </form>
        <DevTool control={control} />
      </div>
   </>
  )
}

export default Form
