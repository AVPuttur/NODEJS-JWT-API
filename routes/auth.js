const router = require('express').Router();
const User = require('../model/User');

//Validation
const Joi = require('@hapi/joi');

const schema = {
	name: Joi.string()
		.min(6)
		.required(),
	email: Joi.string()
		.min(6)
		.required()
		.email(),
	password: Joi.string()
		.min(6)
		.required()
} 


router.post('/register', async (req, res) => {

	//Validate data before creation
	const validation = Joi.validate();
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
	try{
		const savedUser = await user.save();
		res.send(savedUser);
	}catch(err){
		res.send(400).send(err);
	}
});

router.post('/login', (req, res) => {
	res.send('Hello login');
});



module.exports = router;