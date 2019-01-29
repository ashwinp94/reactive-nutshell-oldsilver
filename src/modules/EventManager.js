const remoteURL = "http://localhost:5002";

export default  {
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(res => res.json());
  },
  getAll() {
    return fetch(`${remoteURL}/events`).then(res => res.json());
  },
  //POST for adding new event
  post(newEvent) {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(newEvent)
    }).then(data => data.json())
  }
  //PUT fetch for edit functionality
}