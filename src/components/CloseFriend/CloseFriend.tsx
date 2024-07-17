import { IUser } from '../../dummyData'
import css from './CloseFriend.module.css'

type Props = { user: IUser }

const CloseFriend = ({ user }: Props) => {
    return (
        <li className={css.sidebarFriend}>
            <img
                className={css.sidebarFriendImg}
                src={user.profilePicture}
                alt=""
            />
            <span className={css.sidebarFriendName}>{user.username}</span>
        </li>
    )
}

export default CloseFriend
