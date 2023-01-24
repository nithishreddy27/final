import Local from 'passport-local'
import clientPromise from './mongodb'
// import { findUser, validatePassword } from './user'

export const localStrategy = new Local.Strategy( async function (
  username,
  password,
  done
) {
  try{

    const db=await clientPromise
    const datb=db.db("provast")
    console.log("connected")
    const res= await datb.collection("details").findOne({username:username})
    
    if(password == res.password){
      done(null,res)
    }
    else{
      done(new Error('Invalid username and password combination') )
    }
  }
  catch(e){
    done(e)
  }

  // findUser({ username })
  //   .then((user) => {
  //     if (user && validatePassword(user, password)) {
  //       done(null, user)
  //     } else {
  //       done(new Error('Invalid username and password combination'))
  //     }
  //   })
  //   .catch((error) => {
  //     done(error)
  //   })
})
