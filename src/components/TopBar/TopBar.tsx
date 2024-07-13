import css from './TopBar.module.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import PersonImage from '../../assets/person/1.jpeg'

const TopBar = () => {
    return (
        <div className={css.topbarContainer}>
            <div className={css.topbarLeft}>
                <span className={css.logo}>Social</span>
            </div>

            <div className={css.topbarCenter}>
                <div className={css.searchBar}>
                    <Search />
                    <input
                        type="text"
                        className={css.searchInput}
                        placeholder="Search for friend, post or video"
                    />
                </div>
            </div>
            <div className={css.topbarRight}>
                <div className={css.topbarLinks}>
                    <span className={css.topbarLink}>Homepage</span>
                    <span className={css.topbarLink}>Timeline</span>
                </div>
                <div className={css.topbarIcons}>
                    <div className={css.topbarIconItem}>
                        <Person />
                        <span className={css.topbarIconBadge}>1</span>
                    </div>
                    <div className={css.topbarIconItem}>
                        <Chat />
                        <span className={css.topbarIconBadge}>2</span>
                    </div>
                    <div className={css.topbarIconItem}>
                        <Notifications />
                        <span className={css.topbarIconBadge}>1</span>
                    </div>
                </div>
                <img src={PersonImage} alt="" className={css.topbarImage} />
            </div>
        </div>
    )
}

export default TopBar
