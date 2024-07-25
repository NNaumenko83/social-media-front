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
    _id: number
    desc?: string
    img: string
    date: string
    userId: number
    likes: string[]
    comment: number
    createdAt: string
}

export interface IUser {
    id: number
    profilePicture: string
    username: string
    desc: string
    city: string
    from: string
    relationship: number
    coverPicture: string
}

export const postsImg: { [key: string]: string } = {
    post1: post1,
    post2: post2,
    post3: post3,
    post4: post4,
    post5: post5,
    post6: post6,
    post7: post7,
    post8: post8,
    post9: post9,
    post10: post10,
}
export const userImg: { [key: string]: string } = {
    person1: person1,
    person2: person2,
    person3: person3,
    person4: person4,
    person5: person5,
    person6: person6,
    person7: person7,
    person8: person8,
    person9: person9,
    person10: person10,
}
