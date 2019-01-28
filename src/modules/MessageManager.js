const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/messages`).then(e => e.json());
  },
  post(newMessage) {
    return fetch(`${remoteURL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    }).then(data => data.json());
  }
};