import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
export default class TaskList extends Component{
  render(){
    return(
      <>
        <div className="taskButton">
          <button type="button"
              className="btn btn-success"
              onClick={() => {
              this.props.history.push("/tasks/new")
              }}
              > 
              Add New Task
          </button>
        </div>
        <section className="tasks">
        {
          this.props.tasks.map(task => 
            <div key={task.id}>
              <h2>
                {task.task} 
                <p>{task.expectedCompletionDate}</p>
              </h2> 
              <Link 
              className="nav-link" 
              to={`/tasks/${task.id}/edit`}>Edit</Link>

              <a href="#"
                  onClick={() => this.props.deleteTask(task.id)
                  .then(() => this.props.history.push("/tasks"))}
                  className="card-link">Delete</a>
            </div>
          )
        }
        </section>
      </>
    )
  }
}