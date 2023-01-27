import express from "express";
import {v4 as uuid} from 'uuid';

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Nowak",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 42
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    const userWithId = { ...user, id: uuid() }

    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the database!`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
})

export default router;