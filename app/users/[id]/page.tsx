import getUser from "@/app/oldlibs/getUser"
import getUserByEmail from "@/app/oldlibs/getUserByEmail";
import getUserPosts from "@/app/oldlibs/getUserPosts";
import getUserPostsByEmail from "@/app/oldlibs/getUserPostsByEmail";
import { log } from "console";

export default async function UserPage({params: {id}}) {
    const userData = await getUser(id);
    const userPosts = await getUserPosts(id);
    log(userPosts);
    return (
        <div>
            <h1 className="text-5xl font-bold" >{userData.name}</h1>
            <p className="text-3xl mt-10" >{userData.email}</p>
            <p className="text-3xl mt-10" >{userData.phone}</p>
            <p className="text-3xl mt-10" >{userData.website}</p>
            <p className="text-3xl mt-10" >{userData.address.city}</p>
            <p className="text-3xl mt-10">
                {userPosts.map((post) => {
                    return (
                        <>
                        <p key={post.id} className="text-3xl mt-10" >{post.title}</p>
                        <p className="text-3xl mt-10" >{post.body}</p>
                        <p>{post.id}</p>
                        <p>{post.userId}</p>

                        

                        </>
                    )
                })}
                </p>         
        </div>
    )
}