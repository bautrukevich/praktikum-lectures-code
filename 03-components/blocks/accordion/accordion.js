const accordionElement = document.querySelector('.accordion');
const buttonElement = accordionElement.querySelector('.accordion__button');
const iconElement = accordionElement.querySelector('.accordion__icon');
const panelElement = accordionElement.querySelector('.accordion__panel');

buttonElement.addEventListener('click', () => {
  iconElement.classList.toggle('accordion__icon_is_rotated');
  panelElement.classList.toggle('accordion__panel_is_opened');
})
