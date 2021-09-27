import React,{useState, useEffect} from 'react'

import axios from 'axios'

const Links = (props) => {
  
    const [posts, setPosts] = useState([])

    const BLOG_URL = 'https://ghost-blog.ipxp.in'
    const CONTENT_API_KEY = '8196190b08906dda0ebf6e6f5d'

    useEffect(() => {

        

        axios.get(`${ BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`)
      
        .then((response) => {
      
                  const result = response.data

                  console.log(result)
                  const allPosts = result.posts
                  setPosts([...allPosts])
      
         })
        .catch((err) => {
      
                  console.log(err.message)
        })
       },[])

      

  
    
       const internalLinks = posts.filter((ele) => {

        return ele.url.includes('https://ghost-blog.ipxp.in')
       })

       console.log('internal links', internalLinks)

      console.log('internalLinks',internalLinks)

       const ExternalLinks = posts.filter((ele) => {

        return !ele.url.includes('https://ghost-blog.ipxp.in')
       })
        console.log(internalLinks)
       

    return (

        <div>
            <div className = "row mb-3">
                <div className= "col-md-6 " >
                    <div className = "card" >
                      <div className = "card-header" > Broken internal links</div>
                        <div className = "card-body">
                            <div className = "card-title">
                            {internalLinks.length === 0 ? <p>No Internal Links</p> : 
                                    
                                    internalLinks.map((ele) => {

                                        return <p><a key = {ele.id} href = {ele.url} target = "_blank">{ele.url}</a></p>
                                    })}

                            </div>
                        </div>
                    </div>
                  </div>

                  <div className= "col-md-6 " >
                    <div className = "card" >
                      <div className = "card-header" > Broken external links</div>
                        <div className = "card-body">
                            <div className = "card-title">
                            {ExternalLinks.length === 0 ? <p>No External Links found</p> : 
            
                                ExternalLinks.map((ele) => {

                                return <p><a key = {ele.id} href = {ele.url} target = "_blank">{ele.url}</a></p>


                            })}     

                            </div>
                        </div>
                    </div>
                  </div>
        </div>
    </div>
    )
}

export default Links