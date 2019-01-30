const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/newsitems/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/newsitems`).then(e => e.json());
  },
  getYourNews(id){
    return fetch(`${remoteURL}/newsitems?userId=${id}`).then(e => e.json());
  },
  post(newNews) {
    return fetch(`${remoteURL}/newsitems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNews)
    }).then(data => data.json());
  }
};