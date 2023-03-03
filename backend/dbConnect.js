const mongoose = require('mongoose')

const dbConnect = () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING, {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    )
    .then(() => {
        console.log('Connected to mongoDB');
    })
    .catch((err) => {
        console.log('Error Connecting to MongoDB')
    })
}

module.exports = dbConnect


