//server
const express = require("express");
const connectionToDatabase = require("./database/dbConnection");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with the actual origin of your React application
    credentials: true,
  })
);

dotenv.config();
connectionToDatabase();
app.use(express.json());

// app.use('/', (req, res)=>{
//   console.log("running");
// })

// redirect to patient routes
app.use("/user/", require("./routes/patientRoutes"));
app.use("/admin/", require("./routes/hospitalRoutes"));
app.use("/doctor/", require("./routes/doctorRoutes"));
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server up and running");
});
