import{useForm} from "react-hook-form";

const Form = () => {

  const form = useForm();
  const {register} = form;
    return (
    <div className="flex justify-center items-center w-full h-full">
      <form className="flex flex-col w-lg gap-2 p-4 border-2 border-black shadow-2xl rounded-2xl mt-50">
        <div className="flex flex-col gap-2  ">
          <label htmlFor="userName">Username</label>
        <input type="text" id="userName" placeholder="eg.john"  className="border-2 border-black outline-0 p-1.5" {...register("username")} /></div>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="john@gmail.com" className="border-2 border-black outline-0 p-1.5"  {...register("email")} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="john123" className="border-2 outline-0 p-1.5 border-black" id="password" {...register("password")} />

        <button className="p-2 bg-black text-white text-xl w-30 rounded-lg" type="submit">Submit</button>

      </form>
        
      
    </div>
  )
}

export default Form
