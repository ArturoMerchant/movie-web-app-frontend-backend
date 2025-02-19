const mongoose = require("mongoose");

const dbConfig = async () => {

    await  mongoose.connect(
"mongodb://mongo:RDhceCRZSRvfNgTmgBCsfCaMAIBkmjvp@switchyard.proxy.rlwy.net:56023")
}

module.exports = dbConfig;