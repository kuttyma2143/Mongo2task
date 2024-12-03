import { useEffect, useState } from 'react'
import "./App.css"
import TaskCard from './components/TaskCard';

// Function Component
function App() {
  const[tasktitle,settasktitle]= useState('');
  
  const [data,setdata]= useState( [
    {
      title: "my detail",
      task: [
      {title:"pulsar",isCompleted: true},
      {title:"tata",isCompleted: true},
      {title:"rock",isCompleted: false},
    ]
    },
    {
        title: "my friend",
        task: [
        {title:"jayakumar",isCompleted: true},
        {title:"rahuman",isCompleted: false},
        {title:"riya",isCompleted: true},
        ],
      }
      
    
    ]
  )
   
// useEffect(() => {
//   document.addEventListener('click',() =>
//   {
//     console.log("clicked")
//   })
// },[])

function handleInputChange(e)
{
settasktitle(e.target.value)
}

function handletaskcreate(e)
{
  e.preventDefault();
  const newdata=[...data];
  newdata.push({
    title: tasktitle,
    task: [],
  })
  setdata(newdata);
}
   
function handlecompletion(catagory,task){
  
  const newdata=[...data];
  const fin=newdata.find((element) => element.title === catagory);
  
  if(fin)
  
  {
  let tas=fin.task.find((element) => element.title === task);
  tas.isCompleted= !tas.isCompleted
  
  }
  
  setdata(newdata);
}
    
  
  
  return (<div>

    <input placeholder='enter task here' onChange={handleInputChange}/>
    <button onClick={handletaskcreate}>save task</button>
    
    
      
      
      {data.map((element, index) => {
       return <TaskCard key={'${index}'} data={element} handlecompletion={handlecompletion}/>
             

        
      })}
    
  
  </div>
  )
}
export default App;