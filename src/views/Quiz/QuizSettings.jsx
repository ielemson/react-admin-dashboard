import React from 'react';
import { useForm } from 'react-hook-form';
import CardAlert from '../../components/Cards/CardAlert';
import CardLoading from '../../components/Cards/CardLoading';
import useAxios from './hooks/useAxios';

const QuizSettings = () => {

    const {response,error,loading} = useAxios({url:"/api_category.php"})    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    // loading ? "loading":""
    // const fetchQuiz = async () => {
    //     const res = await axios.get(
    //         `https://opentdb.com/api_category.php`,
    //         {
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Accept':'application/json',
    //                 'Content-Type':'application/json',
    //             }
    //         }
    //     );
    //     return res.data;
    // }

    // React.useEffect(()=>{
    // fetchQuiz()
    // },[])

    return (
      
      
       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My Quiz App</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      {
        loading ? (<CardLoading/>):(
          
    
    <>
     {
        error ? (<CardAlert title="Notification!" notification={error?.message} bgColor="bg-red-400"/>):(    <form onSubmit={handleSubmit(onSubmit)}>
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Select Quiz Property
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Category
              </label>
              <select
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                {...register("category", {required:true})}
              >
             {response.trivia_categories.map((trivia,i)=>(
              <option value={trivia.name} key={i}>{trivia.name}</option>
            ))}
                        </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                
              >
                Difficulty
              </label>
              <select
               
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                {...register("difficulty", { required:true })}
              >
                <option value="">Difficulty Level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div> 
          
            <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                
              >
                Type
              </label>
              <select
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                {...register("type", {required:true})}
              >
                <option value="">Select Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                
              >
                Amount of Question
              </label>
              <input
                type="number"
                {...register("amount", {required:true, min: 1, max: 100 })}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
               
              />
            </div>
          </div>
       
          <button
          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-4 ease-linear transition-all duration-150"
          type="submit"
        >
          Get Started
        </button>
        </div>
    </form>)
      }
    </>

    
    )
      }
        
        </div>
      </div>
     
    );
};

export default QuizSettings;