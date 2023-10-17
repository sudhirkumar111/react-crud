import React from 'react'
import { NavLink } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify'
import { useEffect,useState } from 'react'
const Dashboard=()=>{
    const {register,handleSubmit,reset} = useForm();
    const [tasks,setTasks] = useState([]);
    const [isEdit,setEdit] = useState(false);
    const [taskId,setTaskId] = useState('');


    const getTask =async ()=>{
        const res = await axios.get('/all-task');
        setTasks(res.data)
    }



    useEffect(()=>{
        getTask();

    },[tasks]


    )

    const submitTask = async (data)=>{
        const res = await axios.post('/create',data);
        if(res.data.success === true){
            reset({description:"",priority:""})
            toast.success(res.data.message)
        }
        else{
            toast.error("Something went wrong")
        }

    }


    const removeTask = async(id)=>{
        const res = await axios.delete(`/delete-task/${id}`);
        if(res.data.success === true){
                toast.warning(res.data.message)
        }
        else{
            toast.error(res.data.message)
        }

    }

    const resetData=(task)=>{
        setEdit(true);
        setTaskId(task._id)
        
        reset({description:task.description,priority:task.priority,dueDate:task.dueDate})

    }


    const editTask = async (data)=>{        
        const res = await axios.patch('/edit-task',{data:data,id:taskId});
        if(res.data.success === true){
            toast.success(res.data.message)
        }
        else
        toast.error(res.data.message)
        reset({description:"",dueDate:"",priority:""})
        setEdit(false)
    }

    return(
        <>
        <ToastContainer
        hideProgressBar
        autoClose={1000}/>
        <h1 className='display-6 text-light text-center'>Dashboard</h1>
    <div className='container-lg'>
        <div className='row'>
            <div className="col-4 ml-2">
                <div className="card " style={{"width": "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title text-center text-danger">{ isEdit ? "Edit Task" : "Add Task"}</h5>
                    <form onSubmit={isEdit ? handleSubmit(editTask)  : handleSubmit(submitTask) }>
                    <div className='form-group'>
                    <textarea rows="2" cols="3" placeholder="Task Description" {...register("description" ,{required:"Description is required"})} className='form-control' />
                    </div>
                    <div className='form-group mt-2'>

                    <select className='form-control' {...register("priority")}>
                    <option value="">Select Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="High">High</option>

                     </select>                    </div>

                     <div className='form-group mt-2'>
                        <label htmlFor='date'>Due Date</label>
                        <input {...register("dueDate", {required:"Due Date is required"})} type="date" id="date" className='form-control' />

                     </div>

                  
                        <button type='submit' className={`btn ${ isEdit ? "btn-warning"  : "btn-success"} mx-2 btn-sm px-3 mt-1`} >{isEdit ? "Save" : "Add"}</button>


                     
<br></br>
                     
                     </form>

                </div>
                </div>

            </div>
            <div className='col-8'>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Description</th>
      <th scope="col">Priority</th>
      <th scope="col">Due Date</th>

      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    { tasks.length>0 && tasks.map((task)=>{
        return(
            <>
            <tr>
                <td></td>
         <td>{task.description}</td>
         <td>{task.priority}</td>
         <td>{task.dueDate}</td>

         <td>
            <button className='btn btn-warning btn-sm' onClick={()=>resetData(task)}> Edit</button>
            <button className='btn btn-danger btn-sm mx-2' onClick={()=>removeTask(task._id)}>Remove</button>

         </td>
                </tr></>

        )
    })
         

    }
   
   
  </tbody>
</table>
               

            </div>

        </div>

    </div>

       

        </>
    )

}


export default Dashboard