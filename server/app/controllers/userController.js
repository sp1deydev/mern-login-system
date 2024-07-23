const express = require('express')
const User = require('./../models/user')
const mongoose = require('mongoose');




const userController = {
    getAllUsers: (req, res) => {

    },
    getUserById: (req, res) => {
        User.findOne({_id: new mongoose.Types.ObjectId(req.params.id)})
        .then(result => {
            if (result) {
                    res.status(200).json({result, status: true });
                }
            else {
                res.json({message: "user not found"})
            }
        })
        .catch(err => console.error(err))
    },
    updateUser: (req, res) => {
        const { firstname, lastname, email } = req.body;
        User.findOneAndUpdate(
            {_id: new mongoose.Types.ObjectId(req.userId)},
            { firstname: firstname, lastname: lastname, email: email },
            {
                returnDocument: "after" // Return the updated document
                }
        )
        .then(result => {
            if (result) {
                    res.status(200).json({user: result, message: "user information updated",  success: true});
                }
            else {
                res.status(500).json({message: "user information not update yet"})
            }
        })
        .catch(err => console.error(err))
    },
    changePassword: (req, res) => {

    },
    deleteUser: (req, res) => {

    },
}

module.exports = userController;