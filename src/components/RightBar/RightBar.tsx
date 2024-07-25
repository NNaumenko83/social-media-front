import css from './RightBar.module.css'
import BirthdayImg from '../../assets/gift.png'
import AdImg from '../../assets/ad.png'

import Online from '../Online/Online'

import Person from '../../assets/person/1.jpeg'
import { IUser } from '../../dummyData'

type Props = { user?: IUser }

enum Relationship {
    SINGLE = 'Single',
    MARRIED = 'Married',
}

const RightBar = ({ user }: Props) => {
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
            {/* <ul className={css.rightbarFriendList}>
                {Users.map(user => (
                    <Online key={user.id} user={user} />
                ))}
            </ul> */}
        </>
    )

    const ProfileRightbar = () => (
        <>
            <h4 className={css.rightbarTitle}>User information</h4>
            <div className={css.rightbarInfo}>
                <div className={css.rightbarInfoItem}>
                    <span className={css.rightbarInfoKey}>City:</span>
                    <span className={css.rightbarInfoValue}>{user?.city}</span>
                </div>
                <div className={css.rightbarInfoItem}>
                    <span className={css.rightbarInfoKey}>From:</span>
                    <span className={css.rightbarInfoValue}>{user?.from}</span>
                </div>
                <div className={css.rightbarInfoItem}>
                    <span className={css.rightbarInfoKey}>Relationship:</span>
                    <span className={css.rightbarInfoValue}>
                        {user?.relationship === 1
                            ? Relationship.SINGLE
                            : user?.relationship === 2
                            ? Relationship.MARRIED
                            : '-'}
                    </span>
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
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default RightBar
