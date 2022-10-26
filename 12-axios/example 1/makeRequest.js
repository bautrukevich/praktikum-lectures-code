const makeRequest = (url, method = 'GET', data, options) => {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    ...options,
  }

  if (data) {
    requestOptions.body = JSON.stringify(data)
  }

  return fetch(url, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(response)
      }
    })
}

const createApi = (baseUrl, defaultOptions) => {
  const makeUrl = (url) => `${baseUrl}/${url}`
  const makeOptions = (options) => ({
    ...defaultOptions,
    ...options,
  })

  return {
    get: (url, options) => makeRequest(makeUrl(url), 'GET', null, makeOptions(options)),
    post: (url, data, options) => makeRequest(makeUrl(url), 'POST', data, makeOptions(options)),
    put: (url, data, options) => makeRequest(makeUrl(url), 'PUT', data, makeOptions(options)),
    patch: (url, data, options) => makeRequest(makeUrl(url), 'PATCH', data, makeOptions(options)),
    delete: (url, options) => makeRequest(makeUrl(url), 'DELETE', null, makeOptions(options)),
  }
}

class Api {
  constructor () {}

  get(url, options) {
    makeRequest(makeUrl(url), 'GET', null, makeOptions(options))
  }
  post(url, data, options) {
    makeRequest(makeUrl(url), 'POST', data, makeOptions(options))
  }
  put(url, data, options) {
    makeRequest(makeUrl(url), 'PUT', data, makeOptions(options))
  }
  patch(url, data, options) {
    makeRequest(makeUrl(url), 'PATCH', data, makeOptions(options))
  }
  delete(url, options) {
    makeRequest(makeUrl(url), 'DELETE', null, makeOptions(options))
  }
}

const mestoApi = createApi('https://mesto.com', {
  headers: {
    authorization: 'c229235b-e991-4a36-a91d-d0c61c907ac3',
  }
})

mestoApi.get('users/me')
mestoApi.post('cards', {
  title: 'Название',
  url: 'https://images.com/image.jpg',
})
