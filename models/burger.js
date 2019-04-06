// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.findAll("burgers", (data) => {
            cb(data);
        })
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne("burgers", burger_name, (res) => {
            cb(res);
        })  
    },
    updateOne: function(burger_name, newValue, valueId, cb) {
        orm.updateOne("burgers", burger_name, newValue, valueId, (res) => {
            cb(res);
        });
    }

}
module.exports = burger;