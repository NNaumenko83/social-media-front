import person1 from './assets/person/1.jpeg'
import person2 from './assets/person/2.jpeg'
import person3 from './assets/person/3.jpeg'
import person4 from './assets/person/4.jpeg'
import person5 from './assets/person/5.jpeg'
import person6 from './assets/person/6.jpeg'
import person7 from './assets/person/7.jpeg'
import person8 from './assets/person/8.jpeg'
import person9 from './assets/person/9.jpeg'
import person10 from './assets/person/10.jpeg'

import post1 from './assets/post/1.jpeg'
import post2 from './assets/post/2.jpeg'
import post3 from './assets/post/3.jpeg'
import post4 from './assets/post/4.jpeg'
import post5 from './assets/post/5.jpeg'
import post6 from './assets/post/6.jpeg'
import post7 from './assets/post/7.jpeg'
import post8 from './assets/post/8.jpeg'
import post9 from './assets/post/9.jpeg'
import post10 from './assets/post/10.jpeg'

export interface IPost {
    id: number
    desc?: string
    photo: string
    date: string
    userId: number
    like: number
    comment: number
}

export interface IUser {
    id: number
    profilePicture: string
    username: string
}

export const Users: IUser[] = [
    {
        id: 1,
        profilePicture: person1,
        username: 'Safak Kocaoglu',
    },
    {
        id: 2,
        profilePicture: person2,
        username: 'Janell Shrum',
    },
    {
        id: 3,
        profilePicture: person3,
        username: 'Alex Durden',
    },
    {
        id: 4,
        profilePicture: person4,
        username: 'Dora Hawks',
    },
    {
        id: 5,
        profilePicture: person5,
        username: 'Thomas Holden',
    },
    {
        id: 6,
        profilePicture: person6,
        username: 'Shirley Beauchamp',
    },
    {
        id: 7,
        profilePicture: person7,
        username: 'Travis Bennett',
    },
    {
        id: 8,
        profilePicture: person8,
        username: 'Kristen Thomas',
    },
    {
        id: 9,
        profilePicture: person9,
        username: 'Gary Duty',
    },
    {
        id: 10,
        profilePicture: person10,
        username: 'Safak Kocaoglu',
    },
]

export const Posts: IPost[] = [
    {
        id: 1,
        desc: 'Love For All, Hatred For None.',
        photo: post1,
        date: '5 mins ago',
        userId: 1,
        like: 32,
        comment: 9,
    },
    {
        id: 2,
        photo: post2,
        date: '15 mins ago',
        userId: 2,
        like: 2,
        comment: 1,
    },
    {
        id: 3,
        desc: 'Every moment is a fresh beginning.',
        photo: post3,
        date: '1 hour ago',
        userId: 3,
        like: 61,
        comment: 2,
    },
    {
        id: 4,
        photo: post4,
        date: '4 hours ago',
        userId: 4,
        like: 7,
        comment: 3,
    },
    {
        id: 5,
        photo: post5,
        date: '5 hours ago',
        userId: 5,
        like: 23,
        comment: 5,
    },
    {
        id: 6,
        photo: post6,
        date: '1 day ago',
        userId: 6,
        like: 44,
        comment: 6,
    },
    {
        id: 7,
        desc: 'Never regret anything that made you smile.',
        photo: post7,
        date: '2 days ago',
        userId: 7,
        like: 52,
        comment: 3,
    },
    {
        id: 8,
        photo: post8,
        date: '3 days ago',
        userId: 8,
        like: 15,
        comment: 1,
    },
    {
        id: 9,
        desc: 'Change the world by being yourself.',
        photo: post9,
        date: '5 days ago',
        userId: 9,
        like: 11,
        comment: 2,
    },
    {
        id: 10,
        photo: post10,
        date: '1 week ago',
        userId: 10,
        like: 104,
        comment: 12,
    },
]
