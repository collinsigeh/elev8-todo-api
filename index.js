const express = require('express')
const app = express()
const port = 3000

// returns all saved to-dos
app.get('/todos', (req, res) => {
  res.send([
      {action_by: 'Collins Igeh', task: 'By bag from shop', status: 'Pending'},
      {action_by: 'Collins Igeh', task: 'Do MEAN Assignment', status: 'Active'},
      {action_by: 'Collins Igeh', task: '', status: 'Completed'}
  ])
})

// returns a single todo
app.get('/todos/:id', (req, res) => {
    const _id = req.params.id;

    res.send("I'm returning a single todo")
})

// saves a new to-do
app.post('/todos', (req, res) => {
    res.send("Saving a new to-do");
})

// updates a single todo
app.patch('/todos/update/:id', (req, res) => {
    const _id = req.params.id;

    res.send(`Updating the post with id ${_id}`)
})

// deletes a single todo
app.delete('/todos/delete/:id', (req, res) => {
    const _id = req.params.id;

    res.send(`Deleting the post with id ${_id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})