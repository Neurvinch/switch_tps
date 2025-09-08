const express = require('express');
const cors = require('cors');
const contract = require("./ethersProvider")
const {ethers} = require( "ethers")

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.json({ message: "Sonic StreamPay Backend is running" });
})


app.post("/create-stream", async (req,res) => {

    try {

        const{recipient,ratePerSecond, duration} = req.body

        const totalDeposit = BigInt(ratePerSecond) *BigInt(duration);


        const tx = await contract.createStream(recipient, ratePerSecond, duration, {value: totalDeposit});

        const receipt = await tx.wait();


        res.json({
            success : true,
            txHash: receipt.hash,
            message: " Stream created successfully",
        })
        
    } catch (error) {
        console.error("Error creating stream:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create stream",
            error: error.message,
        });
    }

})

   app.post("/withdraw", async (req,res) => {
     

    try {

         const {streamId} = req.body;

         const tx = await contract.withdraw(streamId);

         const receipt = await tx.wait();

         res.json({
            success: true,
            txHash: receipt.hash,
            message: "Withdraw successful",
         })

        
    } catch (error) {
         
        console.error("Error withdrawing from stream:", error);
        res.status(500).json({
            success: false,
            message: "Failed to withdraw from stream",
            error: error.message,
        });

        
    }
   })

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
