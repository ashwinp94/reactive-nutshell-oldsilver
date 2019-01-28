const remoteURL = "http://localhost:5002";

export default  {
  /* get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(res => res.json());
  }, */
  getAll() {
    return fetch(`${remoteURL}/events`).then(res => res.json());
  }
  //PUT fetch for edit functionality
}