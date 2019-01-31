import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import "./Task.css"
export default class TaskList extends Component{
state = {
  complete: false
}
// Just seeing if the state is not its state from above
handleFieldChange = () => {
  this.setState({
    complete: !this.state.complete
  })
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
          <div className="taskCard" key={task.id}>
              <h2>
                {task.task} 
              </h2>
              <p>{task.expectedCompletionDate}</p>
              <p>Complete <input 
                id = {task.id}
                type = "checkbox"
                // on click of checkbox - we are keeping the task value and the expected completion date but changes the default
                //value of complete to true and removing the entrty from the DOM 
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
                /> </p>
              <Link className="nav-link edit" to={`/tasks/${task.id}/edit`}>Edit</Link>
            </div>
          )
        }
        </section>
      </>
    )
  }
}