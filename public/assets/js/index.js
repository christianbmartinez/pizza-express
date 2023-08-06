// Show toast notification
const showToast = (option) => {
  const toast = document.getElementById('toast')
  toast.innerText = `🍕 Changed shipping option to ${option}`
  toast.className = 'show'
  setTimeout(() => {
    toast.className = toast.className.replace('show', '')
  }, 3000)
}

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
// Render the order placed view after checkout
const placeOrder = () => {
  window.location.replace('/order-placed')
}
// Delete an order
const deleteOrder = async (id) => {
  await fetch(`/api/orders/${id}`, {
    method: 'DELETE',
  })
  window.location.replace('/checkout')
}
// Toggles shipping text when they are choosing an option
const changeShippingText = (option) => {
  const shippingText = document.getElementById('shipping')
  if (option === 1) {
    shippingText.innerText = 'Free Delivery - $0.00'
    showToast('Free Delivery')
  } else if (option === 2) {
    shippingText.innerText = 'Store Pickup - $0.00'
    showToast('Store Pickup')
  } else {
    return
  }
}
