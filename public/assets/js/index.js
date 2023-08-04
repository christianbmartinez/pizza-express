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
const addToCart = async (pizzaId, price) => {
  const data = {
    total_price: price,
  }
  await fetch(`/api/orders/${pizzaId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  window.location.replace('/checkout')
}
