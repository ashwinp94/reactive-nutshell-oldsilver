const localURL = "http://localhost:5002"

export default{
  getAll(){
    return fetch(`${localURL}/tasks`).then(res => res.json())
  }
}