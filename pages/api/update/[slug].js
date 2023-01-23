import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res){
    const email=req.query;
    // res.json(data.slug)
    const db=await clientPromise
    const datb=db.db("provast")
    console.log("conn")
    await datb.collection("details").findOneAndUpdate({"username":email.slug},{$set:JSON.parse(JSON.stringify(req.body))})
    console.log("found in slug")
    const data=await datb.collection("details").find({}).toArray()
    res.json({"done":data})
}