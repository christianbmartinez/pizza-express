// Logout the user
const logout = async () => {
  await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
  window.location.replace('/login')
}

// Takes the user back one page
const goBack = () => {
  history.go(-1)
}

// Add order item to cart
const addToCart = async (id) => {
  await fetch(`/api/orders/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      id: id,
    },
  })
  window.location.replace('/checkout')
}
