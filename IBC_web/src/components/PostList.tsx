import { client } from "../sanity/sanityClient";   
import type { Post } from '../../sanity.types'
import { useState, useEffect } from 'react'

export const PostList = () => {

const [ posts, setPosts ] = useState<Post[]>([])
const [ loading, setLoading ] = useState(true)

    useEffect(()=>{

        const fetchPost = async () => {
            try {
                setLoading(true)
                const query = '*[_type == "post" && 1(_id in drafts.**)] | order(_createdAt desc)'

                const data = await client.fetch<Post[]>(query)
                setPosts(data)
            } catch(error) {
                console.log('Something was Wrong', error)
            } finally {
                setLoading(false)
            }
        }
       
        fetchPost()
    }, [])

    if(loading){
        return <div className="text-center py-10 text-gray-500">Loading...</div>
    }

    return(
        <>
         <div  className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">
                Últimos Artículos
            </h1>

            {posts.length === 0 ? ( <p className="text-gray-600">No hay ningún artículo publicado todavía.</p>
                ) : (
                <div className="grid gap-6 md:grid-cols-2">
                    {posts.map((post) => (
                        <div key={post._id} className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 line-clamp-3 mb-4">
                                {post.content}
                            </p>
                            <span className="text-xs text-gray-400">
                                Fecha: {post._createdAt ? new Date(post._createdAt).toLocaleDateString() : ''}
                            </span>
                        </div>
                    ))}
                </div>
            )}
         </div>
        </>
    )
}
