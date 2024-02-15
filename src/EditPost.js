import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const EditPost = () => {
  const {posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle} = useContext(DataContext)
    const {id} = useParams()
    const post = posts.find((p)=>(p.id).toString()===id)
    // console.log(editPost);
    useEffect(()=>{
      if (post) {
        setEditBody(post.body)
        setEditTitle(post.title)
      }
    },[])

    const handleEditChange = (e) =>{
        e.preventDefault()
        setEditTitle(e.target.value)
    }
  return (
    <main className='NewPost'>
      {editTitle && 
      <>
      <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
      <h2>Edit Form</h2>
      <label htmlFor='postT'>Title:</label>
      <input type='text' id='postT'
       value={editTitle}
        onChange={(e)=>setEditTitle(e.target.value)}></input>
      <label htmlFor='postBody'>Body:</label>
      <input type='text' id='postBody'
       value={editBody}
        onChange={(e)=>setEditBody(e.target.value)}></input>
      <button type='submit' onClick={()=>{handleEdit(post.id)}}>Submit</button>
      </form>
      </>}
    </main>
  )
}

export default EditPost