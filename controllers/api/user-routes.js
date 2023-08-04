const router = require('express').Router()
const { User } = require('../../models')
// Signup
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body)

    req.session.save(() => {
      req.session.user_id = userData.dataValues.id
      req.session.logged_in = true
      res.redirect('/order')
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } })

    if (!userData) {
      res.status(404).json({ message: 'No user found' })
      return
    }

    const validPassword = userData.checkPassword(req.body.password)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' })
      return
    }

    req.session.save(() => {
      req.session.user_id = userData.dataValues.id
      req.session.logged_in = true
      res.redirect('/order')
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})

module.exports = router;
