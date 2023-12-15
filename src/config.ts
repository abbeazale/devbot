import dotenv from "dotenv";

dotenv.config();

const {TOKEN, CLIENT_ID, SERV_ID} = process.env;

if(!TOKEN || !CLIENT_ID || !SERV_ID) {
    throw new Error("missing env variables");
}

export const config = {
    TOKEN,
    CLIENT_ID,
    SERV_ID
}