const express = require('express')
const router = express.Router()
const { User } = require('../models')

router
    .get('/', async (req, res) => {
        console.log("user router ....");
        try {
            const users = await User.findAll()
            return res.json(users)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ "error": "Something went wrong." })
        }
    })
    .post('/', async (req, res) => {
        const { name, dob, email, role } = req.body;
        try {
            const user = await User.create({ name, dob, email, role })
            return res.json(user)
        } catch (err) {
            console.log("err:", err)
            return res.status(500).json(err)
        }
    })
    .put('/:uuid', async (req, res) => {
        const uuid = req.params.uuid
        const { name, dob, email, role } = req.body;
        try {
            const user = await User.findOne({ where: { uuid } })
            user.name = name
            user.dob = dob
            user.email = email
            user.role = role
            await user.save()
            return res.json(user)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ "error": "Something went wrong." })
        }
    })
    .delete('/:uuid', async (req, res) => {
        const uuid = req.params.uuid
        try {
            const user = await User.findOne({ where: { uuid } })
            await user.destroy()
            return res.json({ message: 'User deleted!' })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ "error": "Something went wrong." })
        }
    })

module.exports = router;