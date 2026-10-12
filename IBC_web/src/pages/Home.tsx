import { PostList } from "../components/PostList"

export default function Home(){

    return(
        <>
         <div>
            <h1 className="text-3xl text-gray-900 mb-6 pl-4 pb-4">IBC Web</h1>
            <PostList />
         </div>
        </>
    )
}