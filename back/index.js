const app = require("./src/server")
const dbConfig = require("./src/config/dbConfig")
require('dotenv').config();

const port = process.env.PORT || 3000;

dbConfig().then((res) => {

    app.listen(port,() => {
        console.log(`Servidor escuchando en el puerto ${port}`);
        
    });
});

