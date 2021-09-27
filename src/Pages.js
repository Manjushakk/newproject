import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Pages = (props) => {

    const [posts, setPosts] = useState([])

    const BLOG_URL = 'https://ghost-blog.ipxp.in'
    const CONTENT_API_KEY = '8196190b08906dda0ebf6e6f5d'

    useEffect(() => {

        axios.get(`${ BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`)
      
        .then((response) => {
      
                  const result = response.data
      
                  const allPosts = result.posts
                  
                  setPosts([...allPosts])
      
         })
        .catch((err) => {
      
                  console.log(err.message)
        })
       },[])

       const withooutMeta = posts.filter((ele) => {

        return ele.meta_description === null
       })

       const tooLongURL = posts.filter((ele) => {

        return ele.url.length > 100
        
       })

       const withoutFeaturedImage = posts.filter((ele) => {

        return ele.feature_image === null
       })

      const shortPosts = posts.filter((ele) => {

        return ele.reading_time <= 1
       })

       const longPosts = posts.filter((ele) => {

        return ele.reading_time >= 6
       })

       const withMeta = posts.filter((ele) => {

        return ele.meta_description !== null
       })

       const longMeta = withMeta.filter((ele) => {

        return ele.meta_description.length > 150
       })
       console.log(longMeta)
       
    return (

        <div className = "container">
            <div className = "row">
                <div className= "col-md-4 " >
                    <div className = "card" >
                      <div className = "card-header" > Posts without Meta Description</div>
                        <div className = "card-body">
                            <div className = "card-title">
                            {withooutMeta.length === 0 ? <p>No posts found</p> : 
                                withooutMeta .map((ele) => {

                                    return <p> <a key = {ele.id} href = {ele.url} target="_blank" >{ele.title}</a></p>
                            })
                    }
                            </div>
                        </div>
                    </div>
                  </div>
           
             <div className= "col-md-4 " >
                    <div className = "card" >
                      <div className = "card-header" > Posts with Long URL</div>
                        <div className = "card-body">
                            <div className = "card-title">
                            {tooLongURL.length === 0 ? <p>No posts found</p> : 
                                tooLongURL.map((ele) => {

                                return <p> <a key = {ele.id} href = {ele.url} target="_blank" >{ele.title}</a></p>
                                })
                            }
                            </div>
                        </div>
                    </div>
                  </div>

                <div className= "col-md-4 " >
                    <div className = "card" >
                      <div className = "card-header" > Posts without featured image</div>
                        <div className = "card-body">
                            <div className = "card-title">
                            {withoutFeaturedImage.length === 0 ? <p>No posts found</p> : 
                                withoutFeaturedImage.map((ele) => {

                                    return <p> <a key = {ele.id} href = {ele.url} target="_blank" >{ele.title}</a></p>
                                })
                            }
                            </div>
                        </div>
                    </div>
                  </div>

            <div className= "col-md-4 " >
                    <div className = "card" >
                      <div className = "card-header" > Short Posts below 250 words</div>
                        <div className = "card-body">
                            <div className = "card-title">
                                {shortPosts.length === 0 ? <p>No posts found</p> : 
                                shortPosts.map((ele) => {

                                    return <p> <a key = {ele.id} href = {ele.url} target="_blank" >{ele.title}</a></p>
                                })
                            }
                            </div>
                        </div>
                    </div>
                  </div>
           
             <div className= "col-md-4 " >
                    <div className = "card" >
                      <div className = "card-header" > Long Posts more than 1500 words</div>
                        <div className = "card-body">
                            <div className = "card-title">
                            {longPosts.length === 0 ? <p>No posts found</p> : 
                                longPosts.map((ele) => {

                                    return <p> <a key = {ele.id} href = {ele.url} target="_blank" >{ele.title}</a></p>
                            })}
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className= "col-md-4 " >
                    <div className = "card" >
                      <div className = "card-header" > Long Meta Description</div>
                        <div className = "card-body">
                            <div className = "card-title">
                            {longMeta.length === 0 ? <p>No posts found</p> : 
                                longMeta.map((ele) => {

                                return <p> <a key = {ele.id} href = {ele.url} target="_blank" >{ele.title}</a></p>
                            })}
                            </div>
                        </div>
                    </div>
                  </div>
        </div> 
            
        </div>
    )
}

export default Pages