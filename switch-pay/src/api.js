import axios from "axios";

const aPI =axios.create({
    baseURL: "http://localhost:5000",
});

export const createStream = async (recipient, ratePerSecond, duration) => {

    return aPI.post("/create-stream", {
        recipient, ratePerSecond,duration
    })
 }

 export const withdraw = async (streamId ) => {
    return aPI.post("/withdraw", {streamId})
 };