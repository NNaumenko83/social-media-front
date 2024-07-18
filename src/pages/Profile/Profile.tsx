import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'
import SideBar from '../../components/SideBar/SideBar'
import TopBar from '../../components/TopBar/TopBar'
import css from './Profile.module.css'
import Post from '../../assets/post/3.jpeg'
import Person from '../../assets/person/7.jpeg'

const Profile = () => {
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
                                Profile Name
                            </h4>
                            <span className={css.profileInfoDesc}>
                                Description
                            </span>
                        </div>
                    </div>
                    <div className={css.profileRightBottom}>
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
