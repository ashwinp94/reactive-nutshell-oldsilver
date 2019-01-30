const localURL = "http://localhost:5002"

export default{
  get(id){
    return fetch(`${localURL}/tasks/${id}`)
    .then(r => r.json())
  },
  getAll(){
    return fetch(`${localURL}/tasks`).then(res => res.json())
  },
  getAllNonCompletedTasks(taskId, existingObj){
    return fetch(`${localURL}/tasks/${taskId}`, {
      method:"PUT",
      headers:{
        "Content-Type": "application/JSON"
      },
      body:JSON.stringify(existingObj)
    })
    .then(response => response.json())
  },
  postNewTask(newTaskObj){
    return fetch(`${localURL}/tasks`,{
      method:"POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body:JSON.stringify(newTaskObj)
    }).then(d => d.json())
  },
  editTask(taskId, existingObj){
    return fetch(`${localURL}/tasks/${taskId}`,{
      method:"PUT",
      headers:{
        "Content-Type": "application/JSON"
      },
      body:JSON.stringify(existingObj)
    })
  }
} 