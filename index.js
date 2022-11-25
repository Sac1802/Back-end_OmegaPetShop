let app = require('./src/app');
let connection = require('./src/db/bd')

const PORT = process.env.PORT || 5000;

app.listen( PORT, ()=>{
    console.log("Server is ready in port", PORT);
});