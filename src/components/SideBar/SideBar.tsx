import React from 'react'
import css from './SideBar.module.css'
import {
    Bookmark,
    Event,
    Group,
    HelpOutline,
    Message,
    PlayCircleFilledOutlined,
    RssFeed,
    School,
    WorkOutline,
} from '@mui/icons-material'
import CloseFriend from '../CloseFriend/CloseFriend'

const SideBar = () => {
    return (
        <div className={css.sidebar}>
            <div className={css.sidebarWrapper}>
                <ul className={css.sidebarList}>
                    <li className={css.sidebarListItem}>
                        <RssFeed className={css.sidebarIcon} />
                        <span className={css.sidebarListItemText}>Feed</span>
                    </li>
                    <li className={css.sidebarListItem}>
                        <Message className={css.sidebarIcon} />
                        <span className={css.sidebarListItemText}>Chats</span>
                    </li>
                    <li className={css.sidebarListItem}>
                        <PlayCircleFilledOutlined className={css.sidebarIcon} />
                        <span className={css.sidebarListItemText}>Videos</span>
                    </li>
                    <li className={css.sidebarListItem}>
                        <Group className={css.sidebarIcon} />
                        <span className={css.sidebarListItemText}>Groups</span>
                    </li>
                    <li className={css.sidebarListItem}>
                        <Bookmark className={css.sidebarIcon} />
                        <span className={css.sidebarListItemText}>
                            Bookmarks
                        </span>
                    </li>
                    <li className={css.sidebarListItem}>
                        <HelpOutline className={css.sidebarIcon} />
                        <span className={css.sidebarListItemText}>
                            Questions
                        </span>
                    </li>
                    <li className={css.sidebarListItem}>
                        <WorkOutline className={css.sidebarIcon} />
                        <span className={css.sidebarListItemText}>Jobs</span>
                    </li>
                    <li className={css.sidebarListItem}>
                        <Event className={css.sidebarIcon} />
                        <span className={css.sidebarListItemText}>Events</span>
                    </li>
                    <li className={css.sidebarListItem}>
                        <School className={css.sidebarIcon} />
                        <span className={css.sidebarListItemText}>Courses</span>
                    </li>
                </ul>
                <button className={css.sidebarButton}>Show more</button>
                <hr className={css.sidebarHr} />
                {/* <ul className={css.sidebarFriendList}>
                    {Users.map(user => (
                        <CloseFriend key={user.id} user={user} />
                    ))}
                </ul> */}
            </div>
        </div>
    )
}

export default SideBar
