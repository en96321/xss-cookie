const express = require('express')
const router = express.Router()

/**
 * @description mock 轉帳 API
 */
router.post('/transfer', (req, res) => {
  const { query: { targetId, money } } = req
  console.log(targetId, money)

  res.status(200).send('Transfer Success')
})

module.exports = router