import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../Redux/actions';

const AddTask = ({handleFilter,filter}) => {
    const [text,setText]=useState("");
    const dispatch= useDispatch();
    const handleAdd=()=>{
        text.trim()
        ? dispatch(addTask({id:Math.random(), action:text, isDone:false}))
        : alert ("please enter the following input");
        setText("");
    };
    return (
        <div>
           <h1 className="title">Our final Tasks</h1> 
           <input type="text" 
           value={text}
           onChange={(e)=>setText(e.target.value)}
           placeholder="Enter your task..."/>
               <div>
                   <button type="submit" onClick={handleAdd} >
                       Add
                   </button>
                   <button onClick={handleFilter}>
                     {filter? 'all' : 'filter' }
                   </button>
                </div>   
        </div>
    );
};

export default AddTask ;
