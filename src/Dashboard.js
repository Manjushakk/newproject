import React,{useState, useEffect} from 'react'
import axios from 'axios'


const Dashboard = (props) => {



  const [total, setTotal] = useState('')
  const [pages, setPages] = useState('')
  const [posts, setPosts] = useState([]) 
  const [authors, setAuthors] = useState('')
  const [tags, setTags] = useState('')
  
  const BLOG_URL = 'https://ghost-blog.ipxp.in'
  const CONTENT_API_KEY = '8196190b08906dda0ebf6e6f5d'

 useEffect(() => {

  axios.get(`${ BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=tags,authors&limit=all`)

  .then((response) => {

            const result = response.data

        

            const postsLength = result.meta.pagination.total
            const PagesLength = result.meta.pagination.pages
            const allPosts = result.posts

            const sortedPosts = allPosts.sort((a, b) => (b.published_at > a.published_at  ) ? 1 : -1)
            setTotal(postsLength)
            setPages(PagesLength)
            setPosts([...sortedPosts])

   })
  .catch((err) => {

            console.log(err.message)
  })
 },[])

 useEffect(() => {

  axios.get(`${ BLOG_URL}/ghost/api/v3/content/authors/?key=${CONTENT_API_KEY}`)

  .then((response) => {

    const result = response.data

    const authorsLength = Object.keys(result).length
    setAuthors(authorsLength)
    
  })
 })

 useEffect(() => {

  axios.get(`${ BLOG_URL}/ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}`)

  .then((response) => {

    const result = response.data

    const tagsLength = result.meta.pagination.total

    setTags(tagsLength)
    
  })
 })
 console.log(posts)
return (

 

<div className = "container">
    <div className = "row">
            
               <div className= "col-md-3 " >
                    <div className = "card" >
                      <div className = "card-header" > Total Posts</div>
                        <div className = "card-body">
                            <div className = "card-title">
                              {total}
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className= "col-md-3 " >
                    <div className = "card" >
                      <div className = "card-header" > Total Pages</div>
                        <div className = "card-body">
                            <div className = "card-title">
                                {pages} 
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className= "col-md-3 " >
                    <div className = "card" >
                      <div className = "card-header" > Total Authors</div>
                        <div className = "card-body">
                            <div className = "card-title">
                                {authors} 
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className= "col-md-3 " >
                    <div className = "card" >
                      <div className = "card-header" > Total Tags</div>
                        <div className = "card-body">
                            <div className = "card-title">
                                {tags}
                            </div>
                        </div>
                    </div>
                  </div>
            
    </div>
                

                
    

    <div className= "col-md-12 " >
                    <div className = "card" >
                      <div className = "card-header" > Latest 5 Published posts List </div>
                        <div className = "card-body">
                            <div className = "card-title">
                            {
                                  posts.filter((item, index) => index < 5).map((filteredItem) => {

                                    return <p><a key = {filteredItem.id} href = {filteredItem.url} target="_blank" >{filteredItem.title}</a></p>

                              })
                            }
                            </div>
                        </div>
                    </div>
                  </div>
  </div>
  
 )
  

}

export default Dashboard