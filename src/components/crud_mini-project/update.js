import React,{useState} from 'react';


function Appdata(){
    const [Teacher, setTecher]= useState('');
    const [price, setPrice]= useState('');
    const [title, setTitle]= useState('');
    let data ={Teacher, price, title}

    return(
        <div className="Up">
   <input type="text" value={Teacher} onChange={(e)=>{setTecher(e.target.value)}}></input><br/>
   <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}></input><br/>
   <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input><br/>



        </div>
    )



}
export default Appdata