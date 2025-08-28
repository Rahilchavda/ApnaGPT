import Box_Logo from '../assets/LogoFinal.png';
import k18 from '../assets/k18.jpeg';
import dropdown from '../assets/dropdown.png';
import Header from '../assets/header.png';
import box from '../assets/box.png';
import pickleball from '../assets/pickleball.jpg';
import football_arena from '../assets/football_arena.jpg';
import badminton_logo from '../assets/badminton_logo.jpg';
import tennis from '../assets/tennis_logo.jpg';
import gym_logo from '../assets/gym_log.jpg';
import swimming from '../assets/swimming.jpg';
import the_turf_arena from '../assets/The_turf_arena_box_football.png';
import box_1545 from '../assets/1545_box_.png';
import Ashwar_box from '../assets/Ashwar_Box.png';
import Gsa_box from '../assets/Gsa_box.png';
import verified from '../assets/verified.png';
import Rahil from '../assets/Rahil.jpeg';
import close from '../assets/close.png';
import settings from '../assets/settings.png';
import apnagpt from '../assets/apnagpt.png';
export const assets = {
    LogoFinal: Box_Logo,
    ketan: k18,
    dropdown: dropdown,
    header: Header,
    box: box,
    pickleball: pickleball,
    football_arena: football_arena,
    badminton_logo: badminton_logo,
    tennis_logo: tennis,
    gym_logo: gym_logo,
    swimming: swimming,
    the_turf_arena: the_turf_arena,
    box_1545: box_1545,
    Ashwar_box: Ashwar_box,
    Gsa_box: Gsa_box,
    verified: verified,
    rahil: Rahil,
    close: close,
    settings: settings,
    apnagpt: apnagpt,
}

export const specialityData = [
    {
        id: 1,
        name: 'BoxCricket',
        image:assets.box,
        description: 'Enjoy a thrilling game of Box Cricket with your friends and family. Book your slot now!',
    },
    {
        id: 2,
        name: 'Pickleball',
        image: assets.pickleball,
        description: 'Experience the fun of Pickleball, a game that combines elements of tennis, badminton, and ping-pong. Perfect for all ages!',
    },
    {
        id: 3,
        name: 'Badminton',
        image: assets.badminton_logo,
        description: 'Play Badminton in our state-of-the-art facilities. Perfect for singles or doubles!',
    },
    {
        id: 4,
        name: 'Football',
        image: assets.football_arena,
        description: 'Join us for a game of Football. Whether you are a beginner or a pro, we have the right pitch for you!',
    },
    {
        id: 5,
        name: 'Tennis',
        image: assets.tennis_logo, 
        description: 'Enjoy a game of Tennis in our well-maintained courts. Perfect for all skill levels!',
    },
    {
        id: 6,
        name: 'Gym',
        image: assets.gym_logo, 
        description: 'Get fit and healthy at our gym. We have all the equipment you need to achieve your fitness goals!',
    },
    {
        id: 7,
        name: 'Swimming',
        image: assets.swimming, 
        description: 'Dive into our swimming pool for a refreshing swim. Perfect for relaxation or exercise!',
    }

]

export const dummyUserData = {
    "_id": "635950495",
    "name": "RahilChavda",
    "email": "rahil@example.com",
    "password": "password123",
    "credits": 200,
}
export const dummyPlans = [
{
    _id: "basic",
    name: "Basic Plan",
    price: 10,
    credits: 100,
    features: ['100 text generations', '50 image generations','Standar Support', 'Access to basic models']
},
{
    _id: "premium",
    name: "Premium Plan",
    price: 20,
    credits: 200,
    features: ['200 text generations', '100 image generations','Priority Support', 'Access to premium models']
}
]

export const dummyChats = [
    {
        "_id": 1,
        "userId": "635950495A3290",
        "userName": "RahilChavda",
        "name": "New Chat",
        messages: [
            { sender: 'user', text: 'Hello, I need help with my booking.' },
            { sender: 'admin', text: 'Sure, I can help you with that. What seems to be the problem?' }
        ],
        "createdAt": new Date().toISOString()
    },
    {
        "_id": 2,
        "user": dummyUserData,
        "name": "Plan Change",  
        "messages": [
            { sender: 'user', text: 'Can I change my plan?' },
            { sender: 'admin', text: 'Yes, you can upgrade or downgrade your plan anytime.' }
        ],
        "createdAt": new Date().toISOString()
    },
    {
        "_id": 3,
        "user": dummyUserData,
        "name": "Upgrade Benefits",
        "messages": [
            { sender: 'user', text: 'What are the benefits of upgrading?' },
            { sender: 'admin', text: 'Upgrading gives you access to more features and priority support.' }
        ]
    }
]
