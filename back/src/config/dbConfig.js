const mongoose = require("mongoose");

const dbConfig = async () => {

    await  mongoose.connect(
        "mongodb+srv://Halortiz:5yyZSPMIOTp3Btc7@merchanflix.vzvu6.mongodb.net/Merchanflix?retryWrites=true&w=majority&appName=merchanflix"
    )
}

module.exports = dbConfig;