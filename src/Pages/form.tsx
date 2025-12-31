import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
import { useState } from "react";
type FormType = {
  Name: string,
  email: string,
  password: string,
  age:string|number,
  gender:string,
  country:string,
  terms:string
};

const Form = () => {
  const { register, control, handleSubmit,formState } = useForm<FormType>();
  const {errors}=formState

  const [info, setInfo] = useState<FormType>({
    Name: "",
    email: "",
    age:"",
    password: "",
    gender:"",
    country:"",
    terms:""
  });
  const onSubmit = (data: FormType) => {
    setInfo(data);
  }


  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col w-lg gap-2 p-4 border-2 border-black shadow-2xl rounded-2xl mt-10">
          <div className="text-center text-2xl font-bold tracking-wide">
            Form
          </div>
          <div className="flex flex-col gap-2  ">
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" placeholder="eg.john" className="border-2 border-black outline-0 p-1.5" {...register("Name", { required: "Name is required",pattern:{
              value:/^[a-zA-Z]+$/i,
              message:"Name must be in letter",
            }, })} />
            <p className="text-red-700">{errors.Name?.message}</p></div>
            

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            className="border-2 border-black outline-0 p-1.5"
            {...register("email", {
              required:"Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="text-red-700">{errors.email?.message}</p>

          <label htmlFor="age">Age</label>
          <input type="number" placeholder="18" className="border-2 outline-0 p-1.5 border-black" id="age" {...register("age",{required:"Age is required",min:{
            value:18,
            message:"Age must be above 18"
          },max:{
            value:99,
            message:"Age must be below 99"
          } })} /> 
           <p className="text-red-700">{errors.age?.message}</p>

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="john123" className="border-2 outline-0 p-1.5 border-black" id="password" {...register("password", { required: "Password is required",min:{
            value:6,
            message:"Password must be more than 6 letter"
          },pattern:{
            value:/^[a-zA-Z0-9]+$/,
            message:"Password shouldn't contain special case"
          }
           })} />
           <p className="text-red-700">{errors.password?.message}</p>

           <div className="flex gap-4">
            <label htmlFor="gender">Gender:</label>
           <div>
            <input type="radio" value="male" {...register("gender",{required:"Gender is required"})} /> 
        <span>Male</span>
           </div>
           <div>
            <input type="radio" value="female" {...register("gender",{required:"Gender is required"})} />
           <span>Female</span>
           </div>
           
          
           </div>
            <p className="text-red-700">{errors.gender?.message}</p>

           <select  {...register("country",{required:"Country is required"})}>
            <option value="">Select Country</option>
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
            <option value="China">China</option>

           </select>
           <p className="text-red-700">{errors.country?.message}</p>


           <div className="flex gap-2">
            <input type="checkbox" value="Accepted terms and condition" {...register("terms",{required:"You must accept the terms and condition"})} />
           <span>Accept terms and condition</span>
           </div>

           <p className="text-red-700">{errors.terms?.message}</p>

          <button className="p-2 bg-black text-white text-xl w-30 rounded-lg" type="submit">Submit</button>

        </form>
        <DevTool control={control} />
      </div>
      <div className="w-lg rounded-2xl p-10 m-auto mt-10 bg-white border-2 border-black flex justify-center items-center flex-col gap-3 text-md ">
        <h1 className="font-bold text-xl">You Submitted</h1>
        <p className="mt-5 text-left w-full"><span className="font-bold">Name: </span>{info.Name}</p>
        <p className=" text-left w-full"><span className="font-bold">Email: </span>{info.email}</p>
        <p className=" text-left w-full"><span className="font-bold">Age: </span>{info.age}</p>
        <p className="text-left w-full"><span className="font-bold">Password: </span> {info.password}</p>
        <p className="text-left w-full"><span className="font-bold">Gender: </span> {info.gender}</p>
        <p className="text-left w-full"><span className="font-bold">Country: </span> {info.country}</p>
        <p className="text-left w-full"><span className="font-bold">Country: </span> {info.terms}</p>
      </div></>
  )
}

export default Form
