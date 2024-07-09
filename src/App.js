import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data.json"
import MiniSections from "./components/MiniSections";
function App() {

const[show,setShow]=useState(data.map(()=>true))
const [item,setItem]=useState([])


function handleClick(event){
  if(item.includes(event.target.innerText)){
    
  }else{
    
    setItem(prevItem=>
      [...prevItem,event.target.innerText]
    )
    console.log(item)
    
    setShow(data.map(d => d.role === event.target.innerText||d.level ===event.target.innerText||
      d.languages.every(la=>la===event.target.innerText)||d.tools.every(tool=>tool===event.target.innerText)))
    }

}
const restData=data.map((d,index)=>{
  return show[index]&&<MiniSections 
      key={d.id}
      {...d}
      click={handleClick}
              
  />
})

const arrElements=item.map((el,index)=>{
  return  <div className="item"><h3>{el}</h3> <span onClick={()=>handleRemove(index)}>X</span></div>
})
function handleClear(){
  if(item.length>0){
    setItem([])
    setShow(data.map(()=>true))
  }
  
}


function handleRemove(index){
  setItem(prevItem=>prevItem.filter((_,i)=>i!==index))
}

return (
    <div className="app">
      <Header
        key={restData.map((d)=>d.id)}
        dataOfItems={arrElements}
        clear={handleClear}  
      />
    <div className="main">
      {restData}
    </div>      
      <Main
    />
    </div>
  );
}

export default App;
