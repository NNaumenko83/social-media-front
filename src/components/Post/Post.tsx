import React from 'react'
import css from './Post.module.css'
import personImg from '../../assets/person/1.jpeg'
import { MoreVert } from '@mui/icons-material'
import postImg from '../../assets/post/1.jpeg'
import Heart from '../../assets/heart.png'
import Like from '../../assets/like.png'

// type Props = {}

const Post = () => {
    return (
        <div className={css.post}>
            <div className={css.postWrapper}>
                <div className={css.postTop}>
                    <div className={css.postTopLeft}>
                        <img
                            className={css.postProfileImg}
                            src={personImg}
                            alt=""
                        />
                        <span className={css.postUserName}>
                            Mykola Naumenko
                        </span>
                        <span className={css.postDate}>5 min ago</span>
                    </div>
                    <div className={css.postTopRight}>
                        <MoreVert />
                    </div>
                </div>
                <div className={css.postCenter}>
                    <span className={css.postText}>
                        Hey! Its my first post!
                    </span>
                    <img className={css.postImg} src={postImg} alt="" />
                </div>
                <div className={css.postBottom}>
                    <div className="postBottomLeft">
                        <img className={css.likeIcon} src={Like} alt="" />
                        <img className={css.likeIcon} src={Heart} alt="" />
                        <span className={css.postLikeCounter}>
                            32 people like it
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className={css.postCommentText}>9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
