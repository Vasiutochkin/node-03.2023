// -- EXPRESS --
const express = require('express');
const fsService = require('./fs.service');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/users', async (req, res) => {
   const users = await fsService.reader();
    res.json(users);
});
//
// app.get('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//     const user = users[+userId];
//
//     res.json(user);
// });
//
// app.post('/users', (req, res) => {
//     const body = req.body;
//     users.push(body);
//
//     res.status(201).json({
//         message: 'User created!'
//     })
// })
//
// app.put('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//     const updatedUser = req.body;
//
//     users[+userId] = updatedUser;
//
//     res.status(200).json({
//         message: 'User updated',
//         data: users[+userId]
//     })
// })
//
// app.delete('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//
//     users.splice(+userId, 1);
//
//     res.status(200).json({
//         message: 'User deleted',
//     })
// })
//
// app.get('/welcome', (req, res) => {
//     res.send('WELCOME');
// });

const PORT = 5100;

app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});