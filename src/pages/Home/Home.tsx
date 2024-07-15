import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'
import SideBar from '../../components/SideBar/SideBar'
import TopBar from '../../components/TopBar/TopBar'
import css from './Home.module.css'

function Home() {
    return (
        <>
            <TopBar />
            <div className={css.homeContainer}>
                <SideBar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}

export default Home
