import css from './Share.module.css'
import userImg from '../../assets/person/1.jpeg'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'

// type Props = {}

const Share = () => {
    return (
        <div className={css.share}>
            <div className={css.shareWrapper}>
                <div className={css.shareTop}>
                    <img
                        className={css.shareProfilePicture}
                        src={userImg}
                        alt=""
                    />
                    <input
                        placeholder="What's in you mind"
                        type="text"
                        className={css.shareInput}
                    />
                </div>
                <hr className={css.shareHr} />
                <div className={css.shareBottom}>
                    <div className={css.sharedOptions}>
                        <div className={css.shareOption}>
                            <PermMedia
                                htmlColor="tomato"
                                className={css.shareIcon}
                            />
                            <span className={css.shareOptionText}>
                                Photo or Video
                            </span>
                        </div>
                        <div className={css.shareOption}>
                            <Label htmlColor="blue" className={css.shareIcon} />
                            <span className={css.shareOptionText}>Tag</span>
                        </div>
                        <div className={css.shareOption}>
                            <Room htmlColor="green" className={css.shareIcon} />
                            <span className={css.shareOptionText}>
                                Location
                            </span>
                        </div>
                        <div className={css.shareOption}>
                            <EmojiEmotions
                                htmlColor="goldenrod"
                                className={css.shareIcon}
                            />
                            <span className={css.shareOptionText}>
                                Feelings
                            </span>
                        </div>
                    </div>
                    <button className={css.shareButton}>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
