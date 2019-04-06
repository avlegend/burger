// Import MySQL connection.
const connection = require("./connection");

const orm = { 
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM ??", [table], (err, results) => {
            if(err) {
                return res.status(500).json(err);
            }
             cb(results);
        });
    },
    //     insertOne: function(){},
    insertOne: function(table, burger_name, cb) {
        connection.query("INSERT INTO ?? SET ?", [table, burger_name], (err, results) => {
            if (err) {
                throw err;
            }
            cb(results)
        })

    },
    //     updateOne: function(){}
    // FIND OUT HOW TO UPDATE JUST ONE USING ~WHERE~
    updateOne: function(table, col, newValue, valueId,  cb) {
        connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [table, col, newValue, valueId], (err, results) => {
            if (err) {
                throw err;
            }
            cb(results)
        })
    }
};

// orm.updateOne("burgers", "burger_name", "mushroom burger", 1, (data) => {
//     console.log(data);
// })
// const myBurger = {
//     burger_name: "lettus wrap burger"
// }
// orm.insertOne("burgers", myBurger, (data) => {
//     console.log(data)
// });

orm.selectAll("burgers", (data) => {
    console.log(data);
});

// Export the orm object for the model (burgers.js).
module.exports = orm;