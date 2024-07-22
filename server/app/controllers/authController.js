const express = require('express');
const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const _const = require('../config/constants');



const createToken = (id) => {
    return jwt.sign({id}, _const.JWT_ACCESS_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
    })
}


const authController = {
    signup: (req, res, next) => {
        const salt = bcrypt.genSaltSync(10);
        const newUser = {
          username: req.body.username,
          password: bcrypt.hashSync(req.body.password, salt)
        };
        User.findOne({username: req.body.username})
            .then(result => {
                if (result) {
                    res.json({message: "username exists"})
                }
                else {
                    const user = new User(newUser);
                    user.save() 
                        .then(result => {
                            // const token = createToken(result._id);
                            // res.cookie('jwt_token', token, {httpOnly: true, maxAge: 3000 * 24 * 60 * 60});
                            res.status(200).json(token)
                        })
                        .catch(err => res.status(500).json(err))
                }
            })
            .catch(err => console.error(err))
    },
    login: (req, res, next) => {
        const user = {
          username: req.body.username,
          password: req.body.password,
        };
        User.findOne({username: req.body.username})
            .then(result => {
                if (result) {
                    const auth = bcrypt.compareSync(user.password, result.password)
                    if(auth) {
                        const token = createToken(user._id);
                        // console.log(token);
                        res.header('Authorization', token);
                        res.cookie('jwt_token', token);
                        req.session.isAuth = true;
                        res.status(200).json({ user, token, status: true });
                    }
                    else {
                        res.json({message: 'incorrect password'});
                    }
                }
                else {
                    res.json({message: "username notfound"})
                }
            })
            .catch(err => console.error(err))
    },
    logout: (req, res, next) => {
        res.cookie('jwt_token', '', {maxAge: 1});
        req.session.destroy((err) => {
            console.log(err);
        })
        res.json({message: 'logout'});
    }
}

module.exports = authController;