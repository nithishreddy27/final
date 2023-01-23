import { createUser } from '../../lib/user'
import clientPromise from "../../lib/mongodb"


export default async function signup(req, res) {
  try {
    const db=await clientPromise
    const datb=db.db("provast")
    console.log("conn")
    await datb.collection("details").insertOne(JSON.parse(JSON.stringify(req.body)))
    res.status(200).send({ done: true })
  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }
}
