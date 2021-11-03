import React from 'react'
import { useSelector } from 'react-redux'

export default function PostAuthor({ userId }) {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  )

  return <p>by {author ? author.name : 'Unknown author'}</p>
}