import React, { useState } from 'react';

const ToDoList = () => {
    let [taskName, setTaskName] = useState("");
    let [completed, setCompleted] = useState(false);

    let [taskList, setTaskList] = useState([]);

    //we will create an array to store every to do list object inside of

    const submitList = (e)=>{
        //the default behavior of a form when it is submitted is to reload the page.  We can prevent this from happening by using a preventDefault();
        
        e.preventDefault(); //this is the first line of code in a submit handle
        console.log("submitted")

        //create a color object (python dictionary) also called a hashmap
        let object = {taskName, completed};

        //use the setColorList setter to update the colorList array to have the color object inside of it. Note: the "..." is the spread function which gives me a copy of what is already in the array plus the specified additional data, which in this case is the colorList plus the current color placed into the array. 
        
        //switched the object to the first index of the array and switched the ...taskList to the last position so that when each task is added on the page that the newest task automatically goes to the top.

        setTaskList([object, ...taskList])
        // console.log(list)

        //clear the form after submission
        setTaskName("");
    }

    //function to toggle if the person completed the task from false to true and vice versa.
    const toggleCompleted = (e, idx)=>{
        console.log("this toggle really works!")
        // 1. make a copy of To Do List
        let [...copyList] = taskList;

        // 2. change the list item at the specific index number property for "completed" to true/false
        copyList[idx].completed = e.target.checked;

        // 3. update the state variable for list with the modified copy
        setTaskList(copyList);
    }

    //delete function to delete individual list items

    const deleteListItem=(e, idx)=>{
        console.log("deleting list item at index-->", idx)
        let filteredCopy = taskList.filter((taskName, i)=>{
            //Inside the filter function, i represents the index number of each pet
            return i != idx //return back only the pets whose index number does not match the index number of the pet we want to delete
        })

        //3. update out state variable for taskList with the modified copy
        setTaskList(filteredCopy)
    }

    return(
        <>
            <form onSubmit={submitList}>
                <div className="form-flex mb-2">
                    <label htmlFor="">List Item:</label>
                    <input onChange={(e)=>{setTaskName(e.target.value)} } type="text" className="form-control-lg" value={taskName} />
                    <input type="submit" value="Add" className="mt-2 btn btn-primary"/>
                </div>
            </form>
            <hr />
            <div className="justify-content-start">
                {
                    taskList.map((listObj, idx) => {
                        return(
                            <div key={idx}>
                                <h5 style={{textDecoration: listObj.completed? "line-through": "none"}}>{listObj.taskName}</h5>
                                <p>Completed? <input type="checkbox" name="" id="" onChange={(e)=>toggleCompleted(e,idx)} /></p>
                                <input onClick={(e)=>{deleteListItem(e, idx)}} type="submit" value="Delete" className="mt-2 btn btn-danger mb-2"/>
                            </div>
                        );
                    })
                } 
            </div>        
        
        </>
    )
    
}



export default ToDoList;