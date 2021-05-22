/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: " Raj'Z ",
  title: "Hi, I'm Raj Valand",
  subTitle: emoji(
    "A Developer studying in Master of Applied of Computer Science at the Dalhousie University 🤵💻. Passionate in Open Source, Software Development and community activities ❤️."
  ),
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/Raj142",
  linkedin: "https://www.linkedin.com/in/raj-valand-477658139/",
  twitter: "https://twitter.com/jessie_anh_ng",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "LEARN EVERY DAY AND STRIVE TO BUILD THINGS THAT HAVE AN IMPACT ON PEOPLE AROUND ME",
  skills: [
    emoji("⚡ Develop back-end and front-end for web applications"),
    emoji("⚡ Always willing to contribute in  open source project"),
    emoji("⚡ Deal with Competitive Programming to improve Problem Solving skills"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Dalhousie University",
      logo: require("./assets/images/URLogo1.png"),
      subHeader: "Masters in Applied Computer Science",
      duration: "May 2021 - May 2022",
      desc: "",
      descBullets: [
        "Some courses: Data Mining and Warehouses, Advanced Topics in Web Services, Advanced topics in Software Development, Data Structures and Algorithms",
        
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },

    {
      Stack: "Problem Solving Skills",
      progressPercentage: "75%",
    },

    {
      Stack: "Front-end and Design",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Open Source Contributor",
      company: "Girl-Script Summer of Code (GSSoC'21)",
      companylogo: require("./assets/images/gssocLogo.png"),
      date: "June 2020 - August 2020",
      desc:
        "Contributed to NeoAlgo , MakeMathEasy, Awesome-Javascript Projects",
      descBullets: [
        "Implement algorithms for various languages such as C/C++ , Java , Python and contribute them in NeoAlgo project.",
        "Develope mini projects in pure javascript such as Todo list, Netflix clone and contribute them in Awesome Javascript Projects.",
        "Added features such as Dark Mode , Google Speech Recognition , Preloader and etc to MakeMathEasy project.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Unistar Softtech Private Limited.",
      companylogo: require("./assets/images/usLogo.png"),
      date: "Dec 2020 – Mar 2021",
      desc:
        "Member of a Web development team and responsible for developing web applications within given time.",
      descBullets: [
        "Work under the guidance of Dishang Maisuriya Sir and lead a Web developers team.",
        "Develope system for private tution classes ",
        "",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jessieAnhNguyen", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
};

// Your Achievement Section Include Your Certification Talks and More



const leadershipSection = {
  title: emoji("Projects 🚀 "),
  achievementsCards: [
    {
      title: "NGO Data Protection and Transparency using Block-Chain Technology",
      subtitle:
        "Lead my team and End up at top 3",
      image: require("./assets/images/ngo.png"),
      footerLink: [
        {
          name: "github",
          url: "https://github.com/Raj142/NGO_Blockchain",
        },
        {
          name: "Youtube",
          url: "https://www.youtube.com/watch?v=HKmwCmUuFaI",
        },
      ],
    },
    {
      title: "Dear Diary",
      subtitle:
        "MERN stack app where we can post our thoughts",
      image: require("./assets/images/memories.png"),
      footerLink: [
        {
          name: "github",
          url: "https://github.com/Raj142/Dear_diary",
        },
      ],
    },

    {
      title: "TODO_App",
      subtitle:
        "Pure JavaScript project with CRUD operations",
      image: require("./assets/images/todo.png"),
      footerLink: [
        {
          name: "github",
          url: "https://github.com/Raj142/To_Do_App",
        },
        // {
        //   name: "Instagram",
        //   url: "https://www.instagram.com/dandyhacks/",
        // },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write about my experiences and projects that I am proud of.",

  blogs: [
    {
      url:
        "https://www.g2i.co/blog/profiling-react-native-apps-runtime-performance-using-hermes",
      title: "Profiling React Native App's Runtime Performance Using Hermes",
      description:
        "An npm tool I developed that makes profiling React Native App easily using Hermes",
    },
    {
      url:
        "https://dev.to/jessie_anh_nguyen/growing-as-a-developer-through-the-mlh-fellowship-eb2",
      title: "Growing as a developer through the MLH Fellowship",
      description:
        "My experience being in the inaugural class of MLH Fellows in Summer 2020",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE AND TALK ABOUT WHAT I'VE BUILT!"
  ),

  talks: [
    {
      title: "Making React Native Fast With Hermes",
      subtitle: "A discussion about Hermes at React Wednesdays",
      url: "https://www.youtube.com/watch?v=JDct3Hsh4m8&ab_channel=KendoUI",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you want to discuss anything, contact me at one of these social media below",
};

//Twitter Section

const twitterDetails = {
  userName: "RajZz14", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  leadershipSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
};
