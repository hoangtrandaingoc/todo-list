import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './image/tick.svg'

class App extends Component{
  constructor(){
    super();
    // Obj
    this.state = {
      newItem: "",
      todoItems: [
        { title: "Learn HTML, CSS", isComplete: true},
        { title: "Learn Javascript"},
        { title: "Learn how to use Git"},
        { title: "Complete the Reactjs course"}
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item){
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      })
    }
  }

  onKeyUp(event){
    if (event.keyCode === 13){//enter key
      let text = event.target.value;
      if (!text){
        return;
      }

      text = text.trim();
      if (!text){
        return;
      }

      this.setState({
          newItem: "",
          todoItems: [
            {title:text, isComplete:false},
            ...this.state.todoItems
          ]
        }
      )
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }
    
//Conditional rendering dung if else  
//   render(){
//     if (this.todoItems.length > 0) {
//       return (
//         <div className="App">
//           {/* khi dung map de bien 1 arr gom obj thanh arr cac component thi phai co key */}
//           {
//             this.todoItems.map((item, index) => <TodoItem key={index} item={item}/>)
//           }
//         </div>
//       );
//     } else {
//       return(
//         <div className="App">Nothing here</div>
//       );
//     }
//   }
// }
  
// Conditional rendering use and or
  render(){
    const {todoItems, newItem} = this.state;
    if(todoItems.length){
      return (
      <div className="App">
        <div className="Name-App">Todos</div>

        <div className="Content">
          <div className="Header"> 
            <img src={tick} width={30}/>
            <input 
              type="text" 
              placeholder="Add a new item..."
              value={newItem} //sau khi add item input se trong
              onChange={this.onChange} 
              onKeyUp={this.onKeyUp}
              //value vs onChange di cung nhau
            />
          </div>

          { todoItems.length && todoItems.map((item, index) => 
            <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onItemClicked(item)}
            />
            )
          } 
        <div className="Menu">
          </div>
        </div>
      </div>
      );
    }
  }
}

export default App;
