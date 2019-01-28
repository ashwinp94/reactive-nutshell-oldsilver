import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
export default class StudentList extends Component{
  render(){
    return(
      <section className="tasks">
      {
        this.props.tasks.map(task => 
          <div key={task.id}>
            <h2>
              {task.task} 
              <p>{task.expectedCompletionDate}</p>
            </h2> 
            <Link className="nav-link" to={`/tasks/${task.id}`}>Edit</Link>
          </div>
        )
      }
      </section>
    )
  }
}