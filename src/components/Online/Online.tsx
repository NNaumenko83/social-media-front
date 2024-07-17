import css from './Online.module.css'
import { IUser } from '../../dummyData'

type IProps = {
    user: IUser
}

const Online = ({ user }: IProps) => {
    return (
        <li className={css.rightbarFriend}>
            <div className={css.rightbarProfileImgContainer}>
                <img
                    className={css.rightbarProfileImg}
                    src={user.profilePicture}
                    alt=""
                />
                <span className={css.rightbarOnline}></span>
            </div>
            <span className={css.rightbarUsername}>{user.username}</span>
        </li>
    )
}

export default Online
