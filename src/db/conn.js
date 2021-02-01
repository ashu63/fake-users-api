const mongoose = require("mongoose")

connection_url = `mongodb+srv://admin:WjSGlLlQ81EnvPhJ@cluster0.2z8lh.mongodb.net/demo-people-data?retryWrites=true&w=majority`

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((req, res) => {
    console.log(`Connection is succesfull with the database`);
}).catch((e) => {
    console.log("no connection");
})