const localURL = "http://localhost:5002"

export default{
  get(id){
    return fetch(`${localURL}/tasks/${id}`)
  },
  getAll(){
    return fetch(`${localURL}/tasks`).then(res => res.json())
  },
  deleteTask(id){
    return fetch(`${localURL}/tasks/${id}`,{
      method:"DELETE"
    })
    .then(r => r.json())
    .then(() => fetch(`${localURL}/tasks`))
    .then(e => e.json())
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