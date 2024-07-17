import css from './Post.module.css'
import { MoreVert } from '@mui/icons-material'
import Heart from '../../assets/heart.png'
import Like from '../../assets/like.png'
import { Users } from '../../dummyData'
import { IPost } from '../../dummyData'

type Props = {
    post: IPost
}

const Post = ({ post }: Props) => {
    const user = Users.find(user => user.id === post.userId)

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
                        <img className={css.likeIcon} src={Like} alt="" />
                        <img className={css.likeIcon} src={Heart} alt="" />
                        <span className={css.postLikeCounter}>
                            {post.like} people like it
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
