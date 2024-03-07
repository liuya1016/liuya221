import { MongoClient } from "mongodb";

const uri = "mongodb://Liuya:Liuya@isit.my.to:27017/?authSource=LiuyaDB";

const client = new MongoClient(uri);
const db = client.db("LiuyaDB");
export default db;
