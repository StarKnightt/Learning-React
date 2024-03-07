import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  // All the functions
  const {
    register,
    handleSubmit,
    setError,
   formState: {errors, isSubmitting},
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async(data) =>{
    await delay(2)  // simulating network delay
   console.log(data)
   if(data.username !== "Prasen"){
    setError("myForm", {message: " You're a good boy"} )
   }
   if(data.username === "zuck"){
    setError("blocked",{message: "sorry this user is blocked"})
   }
  }  
  
  return (
    <>
    {isSubmitting && <div>Loading...</div>}
    <div className="container">
      <form action=""onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username' {...register("username", { required: {value:true, message: "this field is required"}, minLength:{value:3, message: "Min length is 3"}, maxLength:{value:10, message: "Max length is 10"} })} type="text"/>
        {errors.username && <div className='red'>{errors.username.message}</div> }
        <br />
        <input placeholder='password' {...register("password",{minLength: {value:7, message: "Minimum length of password is 7"}})} type="password"/>
        {errors.password && <div className='red'>{errors.password.message}</div> }
        <br />
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myForm && <div className='red'>{errors.myForm.message}</div> }        
        {errors.blocked && <div className='red'>{errors.blocked.message}</div> }        
      </form>
    </div>
    </>
  );
}

export default App 

// 22:53