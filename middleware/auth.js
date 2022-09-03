module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
<<<<<<< HEAD
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/dashboard')
      }
    },
=======
    }
>>>>>>> 5e056b3 (yousef's HTML and CSS work)
  }
  