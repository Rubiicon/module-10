'use strict';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  toggl: document.querySelector('#theme-switch-toggle'),
};

refs.toggl.addEventListener('change', changeTheme);

function changeTheme() {
  if (refs.toggl.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    saveThemeToLocalStorage(Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    saveThemeToLocalStorage(Theme.LIGHT);
  }
}

function saveThemeToLocalStorage(themeSave) {
  localStorage.setItem('theme', `${themeSave}`);
}

function appliedTheme() {
  const getLocalStorage = localStorage.getItem('theme');
  if (getLocalStorage === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.toggl.checked = true;
  } else if (getLocalStorage === Theme.LIGHT) {
    refs.body.classList.add(Theme.LIGHT);
    refs.toggl.checked = false;
  }
}

appliedTheme();
