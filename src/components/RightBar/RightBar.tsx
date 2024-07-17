import React from 'react'
import css from './RightBar.module.css'
import BirthdayImg from '../../assets/gift.png'
import AdImg from '../../assets/ad.png'
import PersonImg from '../../assets/person/3.jpeg'

// type Props = {}

const RightBar = () => {
    return (
        <div className={css.rightbar}>
            <div className={css.rightbarWrapper}>
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
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                    <li className={css.rightbarFriend}>
                        <div className={css.rightbarProfileImgContainer}>
                            <img
                                className={css.rightbarProfileImg}
                                src={PersonImg}
                                alt=""
                            />
                            <span className={css.rightbarOnline}></span>
                        </div>
                        <span className={css.rightbarUsername}>
                            John Carter
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RightBar
