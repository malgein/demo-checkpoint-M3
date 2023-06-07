const {Router} = require('express')

const usersRouter = Router()

 //* GET /users que responda con todos los usuarios

//* GET /users/:id que responda con el id del usuario en especifico

//* GET /users/phone

//* POST /users crea nuevos usuarios

//* PUT /users/:id recive por body los datos nuevos del usuario

//* DELETE /users/:id borra usuarios por id

usersRouter.get('/', (req, res) => {
	res.send('ruta para obetener todos los usuarios')
})

usersRouter.get('/phone' , (req, res) => {
	res.send('ruta para obtener todos los usuarios que tengan telefono')
})

usersRouter.get('/:id', (req, res) => {
	res.send('ruta para obtener el usuario con un id')
})

usersRouter.post('/' , (req, res) => {
	res.send('ruta para crear una nuevo usuario')
})

usersRouter.put('/:id', (req, res) => {
	res.send('ruta para modificar usuarios')
})

usersRouter.delete('/:id' , (req, res) => {
	res.send('ruta para elminar usuarios por su id')
})

module.exports = usersRouter