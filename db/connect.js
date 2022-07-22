const mongoose = require('mongoose')

// const connection_string = 'mongodb+srv://mohit:MTn7xK4vPZ*m8Q@cluster0.uc2xc.mongodb.net/task-manager?retryWrites=true&w=majority'
const connectdb = (url) => {
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,

        })
}
module.exports = connectdb
    // .then(() => console.log('new connection'))
    // .catch((err) => console.log(err))