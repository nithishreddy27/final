import { useRouter } from 'next/router'
import React from 'react'

export default function slug() {

    const router= useRouter()
    const email = router.query.slug
  return (
    <div>{email}</div>
  )
}
