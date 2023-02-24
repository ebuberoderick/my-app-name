// ======================================= for functional component ================================= //

// import {  useEffect, useState } from 'react';
// import React from 'react'
// import { connect } from 'react-redux'
// import './App.css';
// function App(props) {
//   const [todo,setTodo] = useState('');
//   const submit = (e) => {
//     e.preventDefault();
//     props.addTodo(todo)
//     setTodo('')
//   }
//   useEffect(() => {
    
//   }, [])
  
//   return (
//     <div className="App">
//       <div className="body">
//         <form onSubmit={submit} style={{ 'padding': '0px 0px 12px 0px', }}>
//           <input required value={todo} onChange={(e)=> setTodo(e.target.value)} type="text" placeholder='Enter TODO task'/>
//           <button type='submit'>ADD TODO</button>
//         </form>
//         <div>
//           <div style={{ 'padding': '0px 0px 12px 0px', }}>TODO's</div>
//           {
//              props.list.map((todo,i) => (
//                <div className="todoCard" key={i} style={{'margin':'8px 0px 0px 0px'}}>
//                  <div className="wrapper">
//                    <div className="todoText"></div>
//                  </div>
//                </div>
//              ))
//            }
//         </div>
//       </div>
//     </div>
//   );
// }


// const mapStateToProps = (state) => ({
//   list : state.todos
// })

// const mapDispatchToProps = (dispatch) =>{
//   return{
//       addTodo: (todo) => {
//         dispatch({type:"ADD_TODO" , payload : { todo ,status:false}})
//       },
//       setAuth : (authMethod) =>{
//         dispatch({type: "AUTH",payload: authMethod})
//       }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

//  ============================================  for class component ======================================== //


import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo : '',
    }
  }
  submit(e){
    e.preventDefault();
    this.props.addTodo(this.state.todo)
    this.setState({todo : ''})
  }
  render() {
    return (
      <div className="App">
        <div className="body">
          <form onSubmit={e => this.submit(e)} style={{ 'padding': '0px 0px 12px 0px', }}>
            <input required value={this.state.todo} onChange={(e)=> this.setState({todo : e.target.value})} type="text" placeholder='Enter TODO task'/>
            <button type='submit'>ADD TODO</button>
          </form>
          <div>
            <div style={{ 'padding': '0px 0px 12px 0px', }}>TODO's</div>
            {
              this.props.list.map((todo,i) => (
                <div className="todoCard" key={i} style={{'margin':'8px 0px 0px 0px'}}>
                  <div className="wrapper">
                    <div className="todoText">{todo.todo}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  list : state.TodoReducer.todos
})

const mapDispatchToProps = (dispatch) =>{
  return{
      addTodo: (todo) => {
        dispatch({type:"ADD_TODO" , payload : { todo ,status:false}})
      },
      setAuth : (authMethod) =>{
        dispatch({type: "AUTH",payload: authMethod})
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)