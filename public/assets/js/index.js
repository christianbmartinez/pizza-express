// Logout the user
const logout = async () => {
  await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
  window.location.replace('/login')
}
