import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
import { useState } from "react";
let renderCount=0;
type FormType={
  username:string,
  email:string,
  password:string
};

const Form = () => {
    const { register, control, handleSubmit } = useForm<FormType>();

 const [info, setInfo] = useState<FormType>({
    username: "NaN",
    email: "NaN",
    password: "NaN",
  });
  const onSubmit=(data:FormType)=>{
    setInfo(data);
  }


  renderCount++;
  return (
 <>
    <div className="flex justify-center items-center w-full h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-lg gap-2 p-4 border-2 border-black shadow-2xl rounded-2xl mt-10">
        <div>
          Form {renderCount/4}
        </div>
        <div className="flex flex-col gap-2  ">
          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" placeholder="eg.john" className="border-2 border-black outline-0 p-1.5" {...register("username")} /></div>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="john@gmail.com" className="border-2 border-black outline-0 p-1.5"  {...register("email")} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="john123" className="border-2 outline-0 p-1.5 border-black" id="password" {...register("password")} />

        <button className="p-2 bg-black text-white text-xl w-30 rounded-lg" type="submit">Submit</button>

      </form>
      <DevTool control={control} />
    </div>
    <div className="w-lg rounded-2xl p-10 m-auto mt-10 bg-white border-2 border-black flex justify-center items-center flex-col gap-3 text-md ">
        <h1 className="font-bold text-xl">You Submitted</h1>
        <p className="mt-5 text-left w-full"><span className="font-bold">Username: </span>{info.username}</p>
        <p className=" text-left w-full"><span className="font-bold">Email: </span>{info.email}</p>
        <p className="text-left w-full"><span className="font-bold">Password: </span> {info.password}</p>
      </div></>
  )
}

export default Form
