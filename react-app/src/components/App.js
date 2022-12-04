import Task from './Todo'
import React from 'react'
import data from '../data'
import Nav from './Nav'



export default function App() {
    const [tasks, setTasks] = React.useState(data)

    function toggleCheck (id) {
      console.log('changing task')
      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          return task.id === id ? {...task, isComplete : !task.isComplete} : task
        })
      })
    }

    const tasksElements = tasks.map(task => {
      return (
        <Task handleClick = {toggleCheck} {...task} />
      )
    })

    return (
      <div>
        <Nav />
        <div className='main--container'>
        {tasksElements}
        </div>
      </div>
    )
}
