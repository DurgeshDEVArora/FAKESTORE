import mongoose from 'mongoose'


const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://yash:rks2tboPo3hes0Ed@fakestore.1lwf5.mongodb.net/FakeStore?retryWrites=true&w=majority")
    console.log("Database Connected")
}


export default ConnectDB;
