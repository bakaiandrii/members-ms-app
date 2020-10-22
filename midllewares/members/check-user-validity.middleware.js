const {newUserValidator} = require('../../validators');

module.exports = (req, res, next) => {
  try {
    const {email, password} = req.body;
    const {error} = newUserValidator.validate({email, password});

    if (error) throw new Error('EMAIL or PASSWORD is not valid!');

    next();

  } catch (err) {
    if(err) res.status(400).end(err.message);
  }
}
