import clientPromise from "../../../lib/mongodb";



export default async function handler(req, res){
    const clgid=req.query
    const db=await clientPromise
    const datb=db.db("provast")
    console.log("connected",clgid)
    const bool= await datb.collection("colleges").findOne({name:clgid.slug})
    console.log(bool)
    if(!bool){
        res.status(200).send({ done: true })
        
    }
    else{
        // res.json({"success":"true"})
    res.status(500).send({ done: true })

    }
}