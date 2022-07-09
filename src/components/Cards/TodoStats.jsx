import React from "react";
// import PropTypes from "prop-types";
import api from "../../api/api";
import {getTodos} from "../../features/todo/todoSlice";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert";


export default function TodoStats({
    statStatus,
    statPercentColor,
    statDescription,
    todoID,
    updatedAt,
    createdAt,
}) {
    const dispatch = useDispatch()
    const notify_error = (data) => toast.error(`${data}`);
    const notify_success = (data) => toast.success(`${data}`);

    const deleTodoItem = (id) => {
       
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    api.get('/todo/destroy/' + id).then((res) => {
                        res.data.status == true ? notify_success('todo removed') : notify_error('error occured')
                        dispatch(getTodos())
                    })
                }
              },
              {
                label: 'No',
                onClick: () => alert('Todo not deleted')
              }
            ]
          });
    }

    const completeTodo = (id) => { // const formData = new formData();
        api.get('/todo/complete/' + id).then((res) => {
            res.data.status == true ? notify_success('todo completed') : notify_error('error occured')
            dispatch(getTodos())
        })
    }

    const undoTodo = (id) =>{
        api.get('/todo/undo/' + id).then((res) => {
            res.data.status == true ? notify_success('todo undone') : notify_error('error occured')
            dispatch(getTodos())
        })
    }

    
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 font-bold text-xs">
                                {
                                `create on ${
                                    moment(createdAt).format("MMM Do YY")
                                }`
                            } </h5>
                            <p className={
                                `${
                                    statStatus === 1 ? 'line-through font-bold text-sm text-gray-500 italic uppercase' : 'font-bold text-sm text-blueGray-700 uppercase'
                                }`
                            }>
                                {statDescription} </p>
                        </div>
                        <div className="w-auto pl-4 flex">
                            <div className="flex items-center justify-center">
                                <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                                    <button onClick={
                                            () => deleTodoItem(todoID)
                                        }
                                        type="button"
                                        className="rounded-l inline-block px-2 py-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">
                                        <i className="far fa-trash-alt text-lg"></i>
                                    </button>
                                    {/* <button type="button" className=" inline-block px-2 py-1 bg-red-400 text-white font-medium text-xs leading-tight uppercase hover:bg-red-600 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">
                                        <i className='far fa-window-close text-xl'></i>
                                    </button> */}
                                    {statStatus === 1 ? (<button onClick={
                                            () => undoTodo(todoID)
                                        }
                                        type="button"
                                        className=" rounded-r inline-block px-2 py-1 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase hover:bg-yellow-700 focus:bg-yellow-700 focus:outline-none focus:ring-0 active:bg-yellow-800 transition duration-150 ease-in-out">
                                        <i className='fas fa-undo-alt text-xl'></i>
                                    </button>):(
                                    <button onClick={() => completeTodo(todoID)}
                                        type="button"
                                        className=" rounded-r inline-block px-2 py-1 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out">
                                        <i className='far fa-check-square text-xl'></i>
                                    </button>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-blueGray-400">
                        <span className={
                            statPercentColor + " mr-2"
                        }>
                            <i>{statStatus === 1 ? 'completed' : 'uncompleted'}</i>
                            {" "} </span>
                        <span className="whitespace-nowrap">
                            {
                            statStatus == 1 ? moment(updatedAt).format("MMM Do YY") : ""
                        }</span>
                    </p>
                </div>
            </div>
        </>
    );
}

