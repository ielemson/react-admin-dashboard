import React from "react";
import TodoItem from "./TodoItem";

export default function HeaderStats({todos,filterTodo}) {
 const [todoLists, setTodoLists] = React.useState([])
console.log(todoLists)
 const filterTodoHandler = ()=>{
      switch (filterTodo) {
        case 'completed':
          setTodoLists(todos.filter(todo=>todo.completed == 1))
          break;
        case 'incomplete':
          setTodoLists(todos.filter(todo=>todo.completed == 0))
          break;
        default:
          setTodoLists(todos)
          break;
      }
     
    }


    React.useEffect(() => {  
      filterTodoHandler()
    }, [filterTodo])

  
  return (
    <>
      {/* Header */}
      <div className="relative md:pt-16 pb-16 pt-6">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
            {
                todoLists.map((todo,key)=>(
                    <div className="w-full lg:w-6/12 p-3 px-4" key={key}>
                    <TodoItem
                      // statTitle={todo.todo}
                      statPercentColor={todo.completed == 1 ? "font-bold text-emerald-500" : "font-bold text-red-500"}
                      statDescription={todo.todo}
                      statStatus={todo.completed}
                      todoID = {todo.id}
                      createdAt={todo.created_at}
                      updatedAt={todo.updated_at}
                      // filterTodoHandler={filterTodoHandler}
                    />
                  </div>
                ))
            }
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
