const baseURL = "http://localhost:9000/api/scores/";

export const getQuizzes = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getSingleQuiz = (id) => {
  const singleQuizUrl = `${baseURL}/${id}`;

  return fetch(singleQuizUrl)
  .then( res => res.json())
}

export const postQuiz = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
      return {
        ...data,
        ...payload
      }
    })
}
export const editQuiz = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
      return {
        ...data,
        ...payload
      }
    })
}

export const deleteQuiz = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}