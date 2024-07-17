import css from './Post.module.css'
import { MoreVert } from '@mui/icons-material'
import Heart from '../../assets/heart.png'
import Like from '../../assets/like.png'
import { Users } from '../../dummyData'
import { IPost } from '../../dummyData'
import { useState } from 'react'

type Props = {
    post: IPost
}

const Post = ({ post }: Props) => {
    const [like, setLike] = useState<number>(post.like)
    const [isLiked, setIsLiked] = useState<boolean>(false)

    const user = Users.find(user => user.id === post.userId)

    const handleLikeClick = (): void => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className={css.post}>
            <div className={css.postWrapper}>
                <div className={css.postTop}>
                    <div className={css.postTopLeft}>
                        <img
                            className={css.postProfileImg}
                            src={user?.profilePicture}
                            alt=""
                        />
                        <span className={css.postUserName}>
                            {user?.username}
                        </span>
                        <span className={css.postDate}>{post.date}</span>
                    </div>
                    <div className={css.postTopRight}>
                        <MoreVert />
                    </div>
                </div>
                <div className={css.postCenter}>
                    <span className={css.postText}>{post?.desc}</span>
                    <img className={css.postImg} src={post.photo} alt="" />
                </div>
                <div className={css.postBottom}>
                    <div className="postBottomLeft">
                        <img
                            className={css.likeIcon}
                            src={Like}
                            alt=""
                            onClick={handleLikeClick}
                        />
                        <img
                            className={css.likeIcon}
                            src={Heart}
                            alt=""
                            onClick={handleLikeClick}
                        />
                        <span className={css.postLikeCounter}>
                            {like} people like it
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className={css.postCommentText}>
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
