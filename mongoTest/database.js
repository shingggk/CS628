const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const MONGODB_URL = "mongodb+srv://CS628:CS628DBTEST@cluster0.uzydhqj.mongodb.net/test"

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, console.log("Connected to DB successfully!"))

// creating schema
const profileSchema = new mongoose.Schema({
    fullName:String,
    class:String
})

// creating model
const Profile = mongoose.model("profile", profileSchema);

// generating data 
const student = new Profile({
    fullName: "TEST4",
    class: "2021" 
})

// saving the data into a collection
student.save()

Profile.find((err, students)=> {
    if (err){console.log(err)}
    else {
        mongoose.connection.close()
        console.log(students)}
})
