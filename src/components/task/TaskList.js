import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
export default class TaskList extends Component{
state = {
  complete: false
}

handleFieldChange = () => {
  this.setState({
    complete: !this.state.complete
  })
  // this.completeTask()
}


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
                <input 
                id = {task.id}
                type = "checkbox"
                onClick={() => {
                  const completeTask = {
                    task: task.task,
                    expectedCompletionDate: task.expectedCompletionDate,
                    complete: !this.state.complete,
                    userId: 1
                  }
                  console.log(completeTask)
                  this.props.updateTasksList(task.id , completeTask)
                  .then(() => this.props.history.push("/tasks"))
                  }
                }
                />
                {task.task} 
                <p>{task.expectedCompletionDate}</p>

              </h2>
              <Link 
                className="nav-link" 
                to={`/tasks/${task.id}/edit`}>Edit</Link>
            </div>
          )
        }
        </section>
      </>
    )
  }
}