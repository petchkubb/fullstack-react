const mongoose = require('mongoose')

const keys = require('../config/keys')

const stripe = require('stripe')(keys.stripeSecretKey)

const requireLogin = require('../middlewares/requireLogin.js')

module.exports = app => {
    app.post(
        '/api/stripe',
        requireLogin,
        async (req, res) => {
            const charge = await stripe.charges.create({
                amount: 500,
                currency: 'usd',
                source: req.body.id,
                description: '5$ for 5 credits',
            })
            req.user.credits += 20
            const user = await req.user.save()

            res.send(user)
        })
}