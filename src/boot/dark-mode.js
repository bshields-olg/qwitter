import { Dark, LocalStorage } from 'quasar'

// The user's choice is remembered between visits/app launches.
// When nothing has been chosen yet we follow the OS/browser preference.
const storageKey = 'darkMode'

export function setDarkMode (mode) {
  LocalStorage.set(storageKey, mode)
  Dark.set(mode)
}

export function toggleDarkMode () {
  setDarkMode(Dark.isActive === false)
}

export default () => {
  let savedMode = LocalStorage.getItem(storageKey)
  if (savedMode === null) {
    savedMode = 'auto'
  }
  Dark.set(savedMode)
}
