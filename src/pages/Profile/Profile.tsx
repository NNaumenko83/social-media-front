import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'
import SideBar from '../../components/SideBar/SideBar'
import TopBar from '../../components/TopBar/TopBar'
import css from './Profile.module.css'
import { useEffect, useState } from 'react'
import { IUser, userImg } from '../../dummyData'
import axios from 'axios'
import noCoverImg from '../../assets/person/noCover.png'
import noAvatar from '../../assets/person/noAvatar.png'

const Profile = () => {
    const [user, setUser] = useState<IUser | undefined>()

    useEffect(() => {
        const getUser = async (): Promise<void> => {
            const res = await axios.get<{ data: IUser }>(
                `http://localhost:8800/api/users?username=jane`,
            )

            setUser(res.data.data)
        }

        getUser()
    }, [])

    return (
        <>
            <TopBar />
            <div className={css.profile}>
                <SideBar />
                <div className={css.profileRight}>
                    <div className={css.profileRightTop}>
                        <div className={css.profileCover}>
                            <img
                                className={css.coverImg}
                                src={user?.coverPicture || noCoverImg}
                                alt=""
                            />
                            <img
                                className={css.userImg}
                                src={
                                    user
                                        ? userImg[user.profilePicture]
                                        : noAvatar
                                }
                                alt=""
                            />
                        </div>
                        <div className={css.profileInfo}>
                            <h4 className={css.profileInfoName}>
                                {user?.username}
                            </h4>
                            <span className={css.profileInfoDesc}>
                                {user?.desc}
                            </span>
                        </div>
                    </div>
                    <div className={css.profileRightBottom}>
                        <Feed username="jane" />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
