const mongoose = require('mongoose');
const MONGODB_URL = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true&authSource=admin";

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log('Successfully connected to database')
  } catch (error) {
    console.log(error)
  }
};
connect();
