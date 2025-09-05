const express = require('express');
const cors = require('cors');
const contract = require("./ethersProvider")

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.json({ message: "Sonic StreamPay Backend is running" });
})


app.post("/create-stream", (req,res) => {

    try {
        
    } catch (error) {
        
    }

})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
