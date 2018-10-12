
var moment = require('moment');

const mongoose = require('mongoose'),
User = mongoose.model('User')


module.exports = {
    topFive: function(req, res) {
        User.find({}, function(err, data){
            if(err){
                console.log("error")
                res.json({message: "Error", error: err});
            } else {
                function compare(a,b) {
                    return b.gold - a.gold;
                }
                data.sort(compare);
                data = data.slice(0,5)
                res.json({message: "Success", topFive: data});
            }
        })
    },

    update: function(req, res) {

        User.updateOne({ user_name: req.body.user_name }, {$set: { gold: req.body.gold, log: req.body.log }}, function (err) {
            if (err) {
                console.log('something went wrong', err);
                res.json({message: "Error", error: err});
            } else {
                //console.log('successfully saved user!');
                res.json({message: "Success", user: "Saved"});
            }
        })
    },

    add: function(req, res) {

        var user = new User({ user_name: req.body.user_name, gold: req.body.gold, log: req.body.log });

        user.save(function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "error", task: "not added"});
            } else {
                //console.log('successfully added a task!');
                res.json({message: "Success", task: "User added"});
            }
        })
    },

    read: function(req, res, user_name) {
    	User.findOne({ user_name: user_name }, function (err, data) {
            if (err) {
                console.log(err)
                res.redirect('/');
            } else {
                res.json({message: "Success", user: data});
            }
        })
    }
};