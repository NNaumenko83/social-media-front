import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'
import SideBar from '../../components/SideBar/SideBar'
import TopBar from '../../components/TopBar/TopBar'
import css from './Profile.module.css'
import Post from '../../assets/post/3.jpeg'
import Person from '../../assets/person/7.jpeg'
import { useEffect, useState } from 'react'
import { IUser } from '../../dummyData'
import axios from 'axios'

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
                            <img className={css.coverImg} src={Post} alt="" />
                            <img className={css.userImg} src={Person} alt="" />
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
