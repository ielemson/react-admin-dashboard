
import moment from "moment";
import TodoStats from "../Cards/TodoStats";

export default function HeaderStats({todos,filterTodoHandler}) {

  return (
    <>
      {/* Header */}
      <div className="relative md:pt-16 pb-16 pt-6">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
            {
                todos.map((todo,key)=>(
                    <div className="w-full lg:w-6/12 p-3 px-4" key={key}>
                    <TodoStats
                      // statTitle={todo.todo}
                      statPercentColor={todo.completed === 1 ? "font-bold text-emerald-500" : "font-bold text-red-500"}
                      statDescription={todo.todo}
                      statStatus={todo.completed}
                      todoID = {todo.id}
                      createdAt={todo.created_at}
                      updatedAt={todo.updated_at}
                      filterTodoHandler={filterTodoHandler}
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
