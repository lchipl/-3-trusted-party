import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import List from '../list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export class App extends Component {
  // const aID = 20;
  state={
  
   todoData: [
    { label: 'Сделка1', important: true, done:true, id: 1 },
    { label: 'Сделка2', important: true, done:false, id: 2 },
    { label: 'Сделка3', important: false, done:false, id: 3 },
  ],
  tend:"",
  filter:"all"
}


handleImportant = (id) =>{
  this.setState(({todoData}) =>{
    const indx = todoData.findIndex( (el) => el.id === id)
        const oldItem = todoData[indx];
        const newItem = {
          ...oldItem,
          important: !oldItem.important
        };
        const newArr =[
          ...todoData.slice(0,indx),
          newItem,
          ...todoData.slice(indx+1)
        ];
        return{
         todoData: newArr
        }
    })
  }

handleDone = (id)  =>{           //Тут нахожу через index map
  this.setState(({todoData}) =>{
    
    
    const indx = todoData.findIndex( (el) => el.id === id)
    const oldItem = todoData[indx];
    const newItem = {
      ...oldItem,
      done: !oldItem.done
    };
    const newArr =[
      ...todoData.slice(0,indx),
      newItem,
      ...todoData.slice(indx+1)
    ];
    return{
     todoData: newArr
    }
})
}


createNewElement = (label) =>{ 

  this.setState( ({todoData}) =>{

    const addNewItem ={
      label,
      important:false,
      done:false,
      id:todoData.length +1
      }
    const newArr =[
        ...todoData,
        addNewItem
    ];
    return{
      todoData: newArr
    }
  })
}

onDeleteElem = (id)=>{
 
  this.setState( ({todoData})=>{
     const ind = todoData.findIndex( (el) =>el.id === id );
     console.log(`пососано ${ind}`)
     const newArr = [
       ...todoData.slice(0,ind),
       ...todoData.slice(ind+1)
     ]
     return{
       todoData:newArr
     }
  
  });
}

handleKey = (tend) =>{
   this.setState({
     tend
   })
}

handleSearch = (items, tend) => {
  if(tend.length ===0){
        return items
  }

  return items.filter((el)=>{
  return el.label.toLowerCase().indexOf(tend.toLowerCase()) > -1;
})
}

handleSetFilter = (name) =>{
     this.setState({
       filter:name
     })
    }    


handleSort = (arrItems, filter) =>{
     switch(filter){
       case "all":
         return arrItems;
       case "active":
         return arrItems.filter((el) =>!el.done)
       case "done":
         return arrItems.filter((el) =>el.done)
       default:
         return arrItems;
     }
}
render() {
  const {todoData, tend, filter} = this.state;

   const countPerfom = todoData.filter( (el) =>el.done).length;
   const cointRemains = todoData.length -countPerfom;

   const Visible = this.handleSort(this.handleSearch(todoData,tend), filter)
  return (
    <div className="todo-app">
      <AppHeader toDo={cointRemains} done={countPerfom} />
      <div className="top-panel d-flex">
        <SearchPanel handleKey={(event)=>this.handleKey(event.target.value)}/>
        <ItemStatusFilter handleSetFilter={this.handleSetFilter} filter={filter} /> 
      </div>

      <List items={Visible}
       handleImportant={this.handleImportant}
       handleDone={this.handleDone}
       createNewElement={this.createNewElement}
       onDeleteElem={this.onDeleteElem}
       />
     
    </div>
  );
}
}

export default App;
