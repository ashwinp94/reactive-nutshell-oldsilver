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
  put(newsId, existingNews) {
    return fetch(`${remoteURL}/newsitems/${newsId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingNews)
    }).then(data => data.json())
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