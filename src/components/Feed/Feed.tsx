import React, { useEffect, useState } from 'react'
import css from './Feed.module.css'
import Share from '../Share/Share'
import { IPost } from '../../dummyData'

// import { Posts } from '../../dummyData'
import Post from '../Post/Post'
import axios from 'axios'

type Props = {
    username?: string
}

const Feed = ({ username }: Props) => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        const getPosts = async (): Promise<void> => {
            const res = username
                ? await axios.get<{ data: IPost[] }>(
                      'http://localhost:8800/api/posts/profile/' + username,
                  )
                : await axios.get<{ data: IPost[] }>(
                      'http://localhost:8800/api/posts/timeline/668b6eb82992408dbd0b1da3',
                  )

            setPosts(res.data.data)
        }
        getPosts()
    }, [username])

    return (
        <div className={css.feed}>
            <div className={css.feedWrapper}>
                <Share />
                {posts.map(post => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed
