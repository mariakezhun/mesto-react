class Api {
  constructor({ url, headers }) {
    this._headers = headers;
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._url}cards`, { headers: this._headers }).then(
      this._checkResponse
    );
  }

  addCards({ name, link }) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._checkResponse);
  }

  deleteCards(_id) {
    return fetch(`${this._url}cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, { headers: this._headers }).then(
      this._checkResponse
    );
  }

  addUserInfo(data) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: data.name, about: data.about }),
    }).then(this._checkResponse);
  }

  editAvatar(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: data.avatar }),
    }).then(this._checkResponse);
  }

  putLike(_id) {
    return fetch(`${this._url}cards/${_id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteLike(_id) {
    return fetch(`${this._url}cards/${_id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-63/",
  headers: {
    Authorization: "bed1775f-78b2-4641-a910-a9a3c50e95a8",
    "Content-Type": "application/json",
  },
});