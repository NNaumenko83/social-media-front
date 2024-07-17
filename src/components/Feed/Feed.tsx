import React from 'react'
import css from './Feed.module.css'
import Share from '../Share/Share'

import { Posts } from '../../dummyData'
import Post from '../Post/Post'

// type Props = {}

const Feed = () => {
    return (
        <div className={css.feed}>
            <div className={css.feedWrapper}>
                <Share />
                {Posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed
