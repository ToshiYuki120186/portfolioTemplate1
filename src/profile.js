// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if false, animation plays everytime element comes on screen
    once: true
}
// Change your display name on tha landing display
const header = {
    name: "Shen Weiying",
}
const background = {
    // Options: Snow or Particle
    type: "Snow"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
    paragraph: "Experienced and Creative full-stack developer with 5+ years of experience in website development providing high-impact web solutions for diverse industry organizations. With an excellent reputation for resolving problems and improving customer satisfaction, I am aimed to be an enthusiastic web developer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. Based on the clear understandings and fundamental knowledge in website relevant stacks, I have a great skill in converting client's desires and ideas into reality aiming at high revenues and great user experiences."
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "HTML5",
        faClass: "fab fa-html5"
    },{
        name: "CSS3",
        faClass: "fab fa-css3"
    },{
        name: "Javascript",
        faClass: "fab fa-js"
    },{
        name: "SASS",
        faClass: "fab fa-sass"
    },{
        name: "Node",
        faClass: "fab fa-node"
    },{
        name: "Python",
        faClass: "fab fa-python"
    },{
        name: "Java",
        faClass: "fab fa-java"
    },{
        name: "PHP",
        faClass: "fab fa-php"
    },{
        name: "Database",
        faClass: "fas fa-database"
    },{
        name: "AWS",
        faClass: "fab fa-aws"
    },{
        name: "Docker",
        faClass: "fab fa-docker"
    },{
        name: "NPM",
        faClass: "fab fa-npm"
    },{
        name: "Heroku",
        faClass: "fas fa-h-square"
    },{
        name: "Swift",
        faClass: "fab fa-swift"
    },{
        name: "Linux",
        faClass: "fab fa-linux"
    },{
        name: "Wordpress",
        faClass: "fab fa-wordpress"
    }
]
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "WealthFront - Banking, investing, borrowing",
        skills: ["HTML, CSS, JS"],
        url: "https://www.wealthfront.com/"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Ecwid - Shopping, Selling",
        skills: ["HTML, CSS, JS"],
        url: "https://www.ecwid.com/"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "DriverDispatcher - Local Delivery",
        skills: ["HTML, CSS, PHP"],
        url: "https://ddispatcher.com/"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "HotelsByDay - Booking",
        skills: ["HTML, CSS, JS"],
        url: "https://www.hotelsbyday.com/en"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "CrossWater",
        skills: ["HTML, CSS, JS"],
        url: "https://thecrosswater.com/"
    },
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous"
const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "EZtime - Attendance Management - iOS & Android Mobile app",
        url: "https://apps.apple.com/il/app/eztime-%D7%90%D7%99%D7%96%D7%99-%D7%98%D7%99%D7%99%D7%9D-%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA-%D7%A0%D7%95%D7%9B%D7%97%D7%95%D7%AA/id1330990044"
    },
    {
        // Add image in './styles/images.css' in #misc2        
        id: "misc2",
        name: "6 Pack Promise - Flutter Fitness app",
        url: "https://apps.apple.com/us/app/6-pack-promise-ultimate-abs/id633815621"
    },
    {
        // Add image in './styles/images.css' in #misc3
        id: "misc3",
        name: "GeckoIPTV player - iOS/TVOS/MacOS app",
        url: "https://apps.apple.com/us/app/gecko-iptv-player/id1541810894"
    },
]
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch"
const contact = {
    pitch: "If you have a comment or a question not addressed above, please feel free to email me. I will respond to you as quickly as possible personally. You can also find me on LinkedIn and Github",
    copyright: "Shen Weiying",
    contactUrl: 'https://formspree.io/f/xvodzrdz'
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/ToshiYuki120186',
    linkedin: 'https://www.linkedin.com/in/shen-weiying-944b76176/',
}
// Dont change anything here
export { animation, header, background, about, skillsBar, projects, miscellaneous, contact, social, section2title, section3Title, section4Title, section5Title }