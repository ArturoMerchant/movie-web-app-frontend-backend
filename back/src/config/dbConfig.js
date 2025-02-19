const mongoose = require("mongoose");

const dbConfig = async () => {

    await  mongoose.connect(
"mongodb://mongo:RDhceCRZSRvfNgTmgBCsfCaMAIBkmjvp@mongodb.railway.internal:27017")
}

module.exports = dbConfig;