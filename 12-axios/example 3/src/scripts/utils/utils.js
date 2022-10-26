const preloaderTemplate = document.querySelector('#preloader-template');
const errorTemplate = document.querySelector('#error-template');

export const showPreloader = (container) => {
  const preloader = preloaderTemplate.content.cloneNode(true).children[0];
  container.replaceChildren(preloader)
}

export const hidePreloader = (container) => {
  const preloader = container.querySelector('.preloader');
  if (preloader) preloader.remove();
}

export const showError = (container, text, hideTimeout = 0) => {
  const error = errorTemplate.content.cloneNode(true).children[0];
  const errorText = error.querySelector('.error__text');
  errorText.textContent = text;
  container.prepend(error)

  if (hideTimeout) {
    setTimeout(() => {
      if (error) error.remove();
    }, hideTimeout)
  }
}

export const getErrorText = (error) => {
  if (error.response) {
    return `Ошибка: ${error.response.data}`;
  }

  if (error.request) {
    return `Ошибка: сервер недоступен, попробуйте позже`;
  }

  return `Ошибка: неизвестная ошибка при запросе, обратитесь в поддержку`;
}
