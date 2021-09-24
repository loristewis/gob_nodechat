import { writable } from 'svelte/store'
import { io } from 'socket.io-client'

export const socket = io('https://whispering-chamber-09886.herokuapp.com/')

export const messagesList = writable([])

export const usersList = writable([])
export const currentUser = writable({})
export const userConnected = writable(false)

export const asideScreen = writable('')
// export const openedRoom = writable('')

export const updateMessagesList = (list) => {
  messagesList.set(list)
}

export const updateUsersList = (list) => {
  usersList.set(list)
}

export const updateCurrentUser = (user) => {
  currentUser.set(user)
}
