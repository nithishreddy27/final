import React from 'react'
import { useRouter } from 'next/router'

export default function Slug() {

    const router= useRouter()
    const email = router.query.slug
  return (
    <div>{email}</div>
  )
}
