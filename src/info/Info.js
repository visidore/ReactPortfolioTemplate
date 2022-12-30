import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

export let colors = ["rgb(207, 130, 22)", "rgb(188, 30, 146)"];


export const info = {
    firstName: "Victorien",
    lastName: "Isidore",
    position: "a Microservice Backend Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[1],
    miniBio: [
        {
            emoji: <a href="https://emoji.gg/emoji/java"><img src="https://cdn3.emoji.gg/emojis/java.png" width="32px" height="32px" alt="java"></img></a>,
            text: 'Java and Tea lover'
        },
        {
            emoji: '🌎',
            text: 'Based in Montréal'
        },
        {
            emoji: "💼",
            text: "Consultant for the national bank of Canada"
        },
        {
            emoji: "📧",
            text: "victorien.isidore@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/victorien_isidore/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/visidore",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/victorien-isidore-13b00b151/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
    {
        proficientWith: ['Java 17', 'SpringBoot 3', 'Git', 'Maven', 'API', 'Atlassian'],
        exposedTo: ['Novelties of Java 17 not used at work', 'ReactJS']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '✈️'
        },
        {
            label: 'photography',
            emoji: '📸'
        },
        {
            label: 'scuba diving',
            emoji: '🤿'
        },
        {
            label: 'dancing',
            emoji: '🕺'
        },
        {
            label: 'games',
            emoji: '♟'
        }



    ],
    portfolio: [
        {
            title: "Learning react via this template",
            live: "",
            source: "https://github.com/paytonjewell/ReactPortfolioTemplate",
            image: mock1
        },
        {
            title: "Next project in mind : creating a lab in Java to help people",
            live: "",
            source: "",
            image: mock2
        }
    ]
}