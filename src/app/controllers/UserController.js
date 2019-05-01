const User = require('../models/User')

class UserController {
  async store (req, res) {
    const { email } = req.body
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'Usuario ja existe' })
    }
    const user = await User.create(res.body)

    return res.json(user)
  }
}
module.exports = new UserController()
