import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {
  const {postTitle,postBody,handleSubmit,setPostBody,setPostTitle}= useContext(DataContext)
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input id='postTitle' type='text' value={postTitle} required onChange={(e)=>setPostTitle(e.target.value)}/>
        <label htmlFor='postBody'>Title:</label>
        <textarea id='postBody' type='text' value={postBody} required onChange={(e)=>setPostBody(e.target.value)}/>
        <button type='submit'>submit</button>
      </form>
    </main>
  )
}

export default NewPost