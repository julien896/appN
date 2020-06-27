const {check} = require('express-validator')

exports.userSignupValidator = [
check('name')
.not()
.isEmpty()
.withMessage('El nombre es requerido'),
check('email')
.isEmail()
.withMessage('Debe ser un email valido'),
check('password')
.isLength({ min: 6})
.withMessage('La contraseña debe contener al menos 6 caracteres')
];
exports.userSigninValidator = [
check('email')
.isEmail()
.withMessage('Debe ser un email valido'),
check('password')
.isLength({ min: 6})
.withMessage('La contraseña debe contener al menos 6 caracteres')
];