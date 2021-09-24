const normalizeUser = (user) => {
  if (user.name === '') {
    user.name = 'Anonymous'
    user.initials = ''
  } else {
    user.initials = user.name.substring(0, 2)
  }

  user.status = true

  return user
}

const normalizeMessage = (message) => {
  message.user = normalizeUser(message.user)

  if (message.type === 'audio') message.value = 'a envoyé un message audio'

  return message
}

export { normalizeUser, normalizeMessage }
