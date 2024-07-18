import css from './RightBar.module.css'
import BirthdayImg from '../../assets/gift.png'
import AdImg from '../../assets/ad.png'

import { Users } from '../../dummyData'
import Online from '../Online/Online'

import Person from '../../assets/person/1.jpeg'

// type Props = {}

const RightBar = ({ profile }) => {
    const HomeRightbar = () => (
        <>
            <div className={css.birthdayContainer}>
                <img className={css.birthdayImg} src={BirthdayImg} alt="" />
                <span className={css.birthdayText}>
                    <b>Pola Foster</b> and <b>3 other friends</b>a birthday
                    today.
                </span>
            </div>
            <img className={css.rightbarAd} src={AdImg} alt="" />
            <h4 className={css.rightbarTitle}>Online friends</h4>
            <ul className={css.rightbarFriendList}>
                {Users.map(user => (
                    <Online key={user.id} user={user} />
                ))}
            </ul>
        </>
    )

    const ProfileRightbar = () => (
        <>
            <h4 className={css.rightbarTitle}>User information</h4>
            <div className={css.rightbarInfo}>
                <div className={css.rightbarInfoItem}>
                    <span className={css.rightbarInfoKey}>City:</span>
                    <span className={css.rightbarInfoValue}>New York</span>
                </div>
                <div className={css.rightbarInfoItem}>
                    <span className={css.rightbarInfoKey}>From:</span>
                    <span className={css.rightbarInfoValue}>Madrid</span>
                </div>
                <div className={css.rightbarInfoItem}>
                    <span className={css.rightbarInfoKey}>Relationship:</span>
                    <span className={css.rightbarInfoValue}>Single</span>
                </div>
            </div>
            <h4 className={css.rightbarTitle}>User friends</h4>
            <div className={css.rightbarFollowings}>
                <div className={css.rightbarFollowing}>
                    <img
                        className={css.rightbarFollowingImage}
                        src={Person}
                        alt=""
                    />
                    <span className={css.rightbarFollowingName}>
                        John Carter
                    </span>
                </div>
                <div className={css.rightbarFollowing}>
                    <img
                        className={css.rightbarFollowingImage}
                        src={Person}
                        alt=""
                    />
                    <span className={css.rightbarFollowingName}>
                        John Carter
                    </span>
                </div>
                <div className={css.rightbarFollowing}>
                    <img
                        className={css.rightbarFollowingImage}
                        src={Person}
                        alt=""
                    />
                    <span className={css.rightbarFollowingName}>
                        John Carter
                    </span>
                </div>
                <div className={css.rightbarFollowing}>
                    <img
                        className={css.rightbarFollowingImage}
                        src={Person}
                        alt=""
                    />
                    <span className={css.rightbarFollowingName}>
                        John Carter
                    </span>
                </div>
                <div className={css.rightbarFollowing}>
                    <img
                        className={css.rightbarFollowingImage}
                        src={Person}
                        alt=""
                    />
                    <span className={css.rightbarFollowingName}>
                        John Carter
                    </span>
                </div>
                <div className={css.rightbarFollowing}>
                    <img
                        className={css.rightbarFollowingImage}
                        src={Person}
                        alt=""
                    />
                    <span className={css.rightbarFollowingName}>
                        John Carter
                    </span>
                </div>
            </div>
        </>
    )

    return (
        <div className={css.rightbar}>
            <div className={css.rightbarWrapper}>
                <ProfileRightbar />
            </div>
        </div>
    )
}

export default RightBar
