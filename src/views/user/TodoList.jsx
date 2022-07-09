import React,{useEffect} from "react";
import { useForm } from "react-hook-form";
import {useSelector,useDispatch} from 'react-redux';
import TodoCard from "../../components/Cards/TodoCard"
import toast from "react-hot-toast";
import { getTodos } from "../../features/todo/todoSlice";
import api from "../../api/api";
import CardLoading from "../../components/Cards/CardLoading";
import CardAlert from "../../components/Cards/CardAlert";


const TodoList = ()=>{
  const dispatch = useDispatch();
  const {curUser} = useSelector((state)=>state.curUser)
  const {todos,isLoading} = useSelector((state)=>state.todos);
  const [filterTodo,setFilterTodo] = React.useState('')

 const {register, handleSubmit,resetField, formState: {
        errors,
        isSubmitting
    }} = useForm();

    const notify_error = (data) => toast.error(`${data}`);
    const notify_success = (data) => toast.success(`${data}`);

    const onFormSubmit = async (data) => {
        await api.post("/todo/store",data).then((res)=>{
          resetField('todo')
        res.data.status == true ? notify_success('todo created') : notify_error('error creating todo')
        dispatch(getTodos())
        }).catch((err)=>err.response.data.errors.forEach(error => notify_error(error)))
    }
    
  
    useEffect(()=>{
      setFilterTodo(filterTodo)
    },[setFilterTodo])

return (

  <>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div className="rounded-t bg-white mb-0 px-6 py-6">
      <div className="text-center flex justify-between">
        <h6 className="text-blueGray-700 text-xl font-bold capitalize">{curUser.user ? curUser.user.username:''} Todo List</h6>
        <button
          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Settings
        </button>
      </div>
    </div>
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Add New Todo
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Enter Todo
              </label>
              <input
                type="text"
                placeholder="create new todo"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
               {...register('todo',{required:'Todo item is required'})}
              />
            <span className=' text-red-500 font-bold text-sm'>{ errors ?. todo && errors.todo.message }</span>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Filter Todo
              </label>
              <select
              onChange={(e)=>setFilterTodo(e.target.value.toLowerCase())}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="all">all</option>
                <option value="incomplete">incomplete</option>
                <option value="completed">completed</option>
              </select>
            </div>
          </div>
        </div>
        <button
        disabled={isSubmitting}
          className="ml-4 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Create Todo
        </button>
      </form>
    </div>
  </div>

  {/* Todo Card */}
 
            {/* Card stats */}

              {
             isLoading === true ? (<CardLoading/>) : todos.length > 0 ? (<TodoCard todos={todos} filterTodo={filterTodo}/>):(<CardAlert title="Notification!" notification={'You do not have any todos yet'} bgColor="bg-red-400"/>)
             }          
  {/* Todo Card */}
 
  </>
 
)

}


export default TodoList;