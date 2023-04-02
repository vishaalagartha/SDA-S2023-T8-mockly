import express from 'express'

const PORT = parseInt(process.env.PORT || '3004')

const app = express()

app.get('/api/', (req, res) => {
  res.json({ message: 'Hello from Payment' })
})

app.post('/payment', (req, res) => {
  const { payer, payee, amount, time } = req.body
})

app.post('/payment-method', (req, res) => {
  // TODO: save payment method
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
