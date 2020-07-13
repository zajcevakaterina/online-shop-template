// карточки с категориями и градиент
const categoriesCards = document.querySelector('.categories-cards');
const categoriesGradient = categoriesCards.querySelector('.categories-cards__gradient');

// дополнительные категории, которые отображаются при клике на кнопку "Еще"
const moreCategoriesElements = document.querySelector('.categories-list__more');
const moreCategoriesButton = moreCategoriesElements.querySelector('.categories-list__more-button');
const additionalCategoriesItems = moreCategoriesElements.querySelector('.categories-list__additional-items');

// элементы для очистки чекбоксов
const clearCheckboxButton = document.querySelector('.sidebar-list__clear-button');
const formWithCheckboxes = document.querySelector('.filter-with-checkbox');
const checkboxes = formWithCheckboxes.querySelectorAll('.filter-with-checkbox__input');

// элементы для очистки поиска
const searchClearButton = document.querySelector('.search__clear-button');
const searchInput = document.querySelector('.search__input');

// элементы для открытия и закрытия мобильного меню
const mobileMenuButton = document.querySelector('.filters__more-button');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const mobileMenuCloseButton = mobileMenu.querySelector('.mobile-menu__close-button');

function fadeCategoriesGradient() { // исчезание градиента у карточек с категориями при прокрутке
  categoriesGradient.classList.add('categories-cards__gradient_state_fade');
  categoriesCards.removeEventListener('scroll', fadeCategoriesGradient);
}

function showAdditionalCategories() { // появление дополнительных категорий при клике на кнопку
  additionalCategoriesItems.classList.add('categories-list__additional-items_state_shown');
  moreCategoriesButton.classList.add('categories-list__more-button_state_hidden');
}

function openMobileMenu() {
  mobileMenu.classList.add('mobile-menu_state_shown');
  overlay.classList.add('overlay_state_shown');
  mobileMenuCloseButton.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
  mobileMenu.classList.remove('mobile-menu_state_shown');
  overlay.classList.remove('overlay_state_shown');
  mobileMenuCloseButton.removeEventListener('click', closeMobileMenu);
}

categoriesCards.addEventListener('scroll', fadeCategoriesGradient);

moreCategoriesButton.addEventListener('click', showAdditionalCategories);

clearCheckboxButton.addEventListener('click', () => { // очистка чекбоксов
  checkboxes.forEach(item => {
    item.checked = false;
  })
})

searchClearButton.addEventListener('click', () => { // очистка поиска
  searchInput.value = '';
})

mobileMenuButton.addEventListener('click', openMobileMenu)
