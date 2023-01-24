import { removeTokenCookie,getTokenCookie } from '../../lib/auth-cookies'

export default async function logout(req, res) {
  removeTokenCookie(res)
  console.log("inside",getTokenCookie(req));
  res.writeHead(302, { Location: '/login' })
  // res.redirect("/")
  res.end()
}
