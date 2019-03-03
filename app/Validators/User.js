'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'require|unique:users',
      email: 'require|email|unique:users',
      password: 'require|confirmed'
    }
  }
}

module.exports = User
