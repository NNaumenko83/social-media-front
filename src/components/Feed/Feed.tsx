import React from 'react'
import css from './Feed.module.css'
import Share from '../Share/Share'
import Post from '../Post/Post'

// type Props = {}

const Feed = () => {
    return (
        <div className={css.feed}>
            <div className={css.feedWrapper}>
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Feed
