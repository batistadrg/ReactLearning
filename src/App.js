import './App.css';
import React, {useMemo, useEffect, useState} from 'react'
import P from 'prop-types'

const Post = ({post, handleClick}) => {
  console.log("filhos renderizou")
  return (
    <div key = {post.id} className='post'>
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <body>{post.body}</body>
    </div>
  )
}

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
}


function App () {

  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')
  console.log('Pai renderizou')


  //Component did mount
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.json())
    .then((r) => setPosts(r));
  },[])

  const handleClick = (value) => {

    setValue(value)


  }


  return (
    <div className='App'>
      <p>
        <input 
        type="search" 
        value={value} 
        onChange={(e)=> setValue(e.target.value) }/>

      </p>

      {useMemo(()=> {
        return (
          posts.length > 0 &&
        posts.map((post)=>(<Post key = {post.id} post={post} handleClick={handleClick}/>))
        )
      }, [posts])}


      
      {posts.length <= 0 && <h1>Carregando...</h1>}
    </div>
  )
}

export default App;
