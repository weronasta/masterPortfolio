/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Weronika's UX portfolio",
  description:
    "I’m a product designer with a passion for data-driven product growth and design strategy. My superpower is blending analytical thinking with empathy to create remarkable user-centered solutions.",
  og: {
    title: "Weronika Stachurska UX Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Weronika Stachurska",
  logo_name: "Weronika Stachurska",
  nickname: "Product designer",
  subTitle:
    "My superpower is blending analytical thinking with empathy to create remarkable user-centered solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1uVrhzzJPcs7zkcNtegdiRdxP21Hvqtg3/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const projectIntro1 = {
  title: "Wellbeing Score",
  logo_name: "Examine your wellbeing with MultiLife",
  nickname: "Project overview",
  subTitle:
    "Wellbeing Score, developed in collaboration with infuture.institute under the supervision of Natalia Hatalska, helps users assess their wellbeing and receive personalized advice across six areas. Available as an anonymous online survey and within the MultiLife platform, it also offers wellbeing tracking features. Over 70,000 people have completed the survey so far.",
  resumeLink:
    "https://drive.google.com/file/d/1uVrhzzJPcs7zkcNtegdiRdxP21Hvqtg3/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/weronika-stachurska/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Behance",
    link: "https://www.behance.net/weronikstachur",
    fontAwesomeIcon: "fa-behance", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Gmail",
    link: "mailto:weronasta@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "How to measure wellbeing?",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [],
    },
    {
      title: "Learning music harmony in virtual reality",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [],
    },
  ],
};

const wbs = {
  title: "Wellbeing Score",
  logo_name: "Examine your wellbeing with MultiLife",
  nickname: "Project overview",
  subTitle:
    "Wellbeing Score, developed in collaboration with infuture.institute under the supervision of Natalia Hatalska, helps users assess their wellbeing and receive personalized advice across six areas. Available as an anonymous online survey and within the MultiLife platform, it also offers wellbeing tracking features. Over 70,000 people have completed the survey so far.",
  myRole:
    "As a product designer, I was responsible for designing the user flow in MultiLife platform and wireframes of the results page and I helped with online survey tool. I ensured the designs met business needs by iterating on feedback from key stakeholders and checked if they were user-friendly by conducting usability tests.",
  projectHeader: "Design process",
  imgpath: "wbs1.png",
  resumeLink:
    "https://drive.google.com/file/d/1uVrhzzJPcs7zkcNtegdiRdxP21Hvqtg3/view?usp=sharing",
  data: [
    {
      title: "Discovery and benchmarking",
      fileName: "DataScienceImg",
      skills: [
        "Have you ever considered what wellbeing means to you? What helps you improve your wellbeing? Infuture.institute has conducted an in-depth research by asking this and other questions to a representative sample of the Polish population and published the results in “Wellbeing in the Polish population” report (https://www.multilife.com.pl/docs/raport_o_dobrostanie.pdf). After carefully reading the report and talking with my peers from the Wellbeing team I managed to gain deep understanding of the Wellbeing Score tool, which helped me at later stages of the process. I have also analysed different survey tools and dashboards to gather inspiration and create a benchmark for further designs.",
      ],
      imagePath: "wbs2.png",
      right: true,
    },
    {
      title: "User flow and user stories",
      fileName: "FullStackImg",
      skills: [
        "This project had two different types of users: anonymous online users and MultiLife app users. They both have their unique needs and goals, which meant I had to prepare user flows and stories  separately for each group. This step helped me visualise how each user would navigate through the tool to achieve their specific objectives.",
      ],
      imagePath: "wbs3.png",
      right: false,
    },
    {
      title: "First wireframes and iterating on feedback from stakeholders",
      fileName: "CloudInfraImg",
      skills: [
        "The main challenge of this project was how to present the survey results. There are many ways to visualize data, so I had experimented with different chart types and page layouts. Throughout this process, I collaborated closely with developers to understand the technical constraints and with key stakeholders to ensure my ideas aligned with the business requirements. I began with low-fidelity wireframes and my designs became more complex as I iterated on them.",
      ],
      imagePath: "wbs4.png",
      right: true,
    },
    {
      title: "Prototypes and usability tests and iterating on users’ feedback",
      fileName: "CloudInfraImg",
      skills: [
        "Together with another product designer, I prepared interactive prototypes of the survey and results page. We conducted 8 usability test sessions (4 on desktop and 4 on mobile devices). I participated in all of them—half as a moderator and the other half as an observer. While participants were impressed and we received a lot of positive feedback, we also identified a few minor usability issues, which we addressed by improving the designs.",
      ],
      imagePath: "wbs5.png",
      right: false,
    },
    {
      title: "Final designs",
      fileName: "CloudInfraImg",
      skills: [
        "The final step in the process involved creating pixel-perfect mockups in line with the design system. These mockups were prepared for various screen sizes, including desktop big, desktop small, tablet, mobile, and native iOS and Android applications, ensuring responsiveness across all platforms.",
      ],
      imagePath: "wbs6.png",
      right: true,
    },
    {
      title: "Impact",
      fileName: "CloudInfraImg",
      skills: [
        "People from infuture.institute, who worked on the Wellbeing Score tool, were impressed by the designs, mentioning that they had never imagined the survey results could be presented in such an interesting way. Additionally, the online survey has been completed over 70,000 times, with many users eager to share their results, including the radar chart, on social media—even without an official paid partnership with Benefit Systems. ",
      ],
      imagePath: "wbs7.png",
      right: false,
    },
    {
      imagePath: "wbs8.png",
      noText: true,
    },
  ],
};

const dashboard = {
  title: "MultiLife HR Dashboard",
  logo_name: "Examine your wellbeing with MultiLife",
  nickname: "Project overview",
  subTitle:
    'MultiLife, a wellbeing platform, collects data on user activity and wellbeing scores, which can be analyzed to assess the overall wellbeing of a company and its employees’ preferences. Our team developed the "Company results" feature, a dashboard that allows HR teams from client companies to track how their employees use the app and evaluate trends in wellbeing.',
  myRole:
    "I was the sole product designer responsible for this project, actively involved in every stage of the design process, from gathering requirements to creating the final designs.",
  projectHeader: "Design process",
  imgpath: "hr1.png",
  resumeLink:
    "https://drive.google.com/file/d/1uVrhzzJPcs7zkcNtegdiRdxP21Hvqtg3/view?usp=sharing",
  data: [
    {
      title: "Gathering and analyzing requirements",
      fileName: "DesignImg",
      skills: [
        "The biggest challenge was balancing the technical constraints of the relatively new MultiLife platform with the differing needs of internal stakeholders and client expectations. I had to thoroughly assess what data was being collected and what could be visualized on the dashboard. I also collaborated closely with the sales team to ensure that the specific business requirements aligned with the clients needs. This phase required careful negotiation and compromise to ensure all parties' needs were addressed.",
      ],
      imagePath: "hr2.png",
    },
    {
      title: "First iteration of wireframes and quick tests with HR employees",
      fileName: "DesignImg",
      skills: [
        "Once I had aligned with stakeholders, I created user stories and moved into low-fidelity wireframes. I presented these wireframes to HR representatives from our own company to validate the direction of the design. These sessions were extremely insightful and led to several design adjustments, ensuring the solution met real HR needs.",
      ],
      imagePath: "hr3.png",
      right: true,
    },
    {
      title: "Collaboration with legal team.",
      fileName: "DesignImg",
      skills: [
        "While developing high-fidelity wireframes, I collaborated closely with the legal team to ensure the anonymity of user data. For instance, I designed an empty state for the dashboard to prevent HR teams from identifying individual users, when the wellbeing score survey has very few responses. This step was critical in maintaining user trust and data privacy compliance.",
      ],
      imagePath: "hr4.png",
    },
    {
      title: "Constant feedback and improvements",
      fileName: "DesignImg",
      skills: [
        "This project is ongoing and evolves alongside the MultiLife product. As we add new features for users and enhance our analytics infrastructure, new possibilities emerge for the HR dashboard. Future iterations and improvements to the designs are heavily influenced by the feedback from our clients, gathered by the sales team.",
      ],
      imagePath: "hr5.png",
      right: true,
    },
    {
      title: "Impact",
      fileName: "DesignImg",
      skills: [
        "Our clients now have measurable evidence of MultiLife's impact on their employees' wellbeing, which helps justify the platform's value.",
        "HR teams are empowered to better plan their company's wellbeing strategy based on a deeper understanding of employee preferences and engagement trends.",
      ],
      imagePath: "hr6.png",
    },
    {
      imagePath: "hr7.png",
      noText: true,
    },
    {
      imagePath: "hr8.png",
      noText: true,
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "How to measure wellbeing?",
  subtitle: "Wellbeing Score: project overview",
  description:
    "Wellbeing Score is a research tool that was developed in collaboration with infuture.institute under the supervision of Natalia Hatalska. It allows users to assess their wellbeing through an anonymous online survey and receive personalised expert advice for improving and maintaining a higher quality of life. The tool is also integrated into the MultiLife platform, offering users a seamless experience in tracking and enhancing their wellbeing. More than 70000 people have already filled out the survey",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Commercial projects",
  description:
    "A showcase of real-world projects I’ve worked on to create user-centered designs that solve problems and drive results.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Explore my scientific papers focused on virtual reality and user-centered design.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name:
        "Virtual Reality in Music Education: A Qualitative User Study of HarmosphereVR",
      createdAt: "2024-06-04T00:00:00Z",
      description:
        "RealXR workshop co-located with 17th International Conference on Advanced Visual Interfaces",
      url:
        "https://www.researchgate.net/publication/381305295_Virtual_Reality_in_Music_Education_A_Qualitative_User_Study_of_HarmosphereVR",
    },
    {
      id: "mdp-diffusion",
      name:
        "Harmosphere VR: Enhancing Harmonic Learning in Music Schools Through Virtual Reality",
      createdAt: "2024-05-04T00:00:00Z",
      description:
        "Proceedings of the 16th International Conference on Computer Supported Education",
      url:
        "https://www.researchgate.net/publication/380386976_Harmosphere_VR_Enhancing_Harmonic_Learning_in_Music_Schools_Through_Virtual_Reality",
    },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

const projects = {
  data: [
    {
      id: "wbs",
      name: "Wellbeing Score",
      createdAt: "Benefit Systems, 2024",
      description: "Examine your wellbeing with Benefit Systems",
      link: "/wbs",
    },
    {
      id: "dashboard",
      name: "HR Dashboard",
      createdAt: "Benefit Systems, 2024",
      description:
        "Take care of the company's wellbeing with the MultiLife analytical dashboard for HR employees",
      link: "/dashboard",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact",
    profile_image_path: "contact.svg",
    description:
      "I'm always open to discussing new ideas, collaborations, or simply chatting about design. Feel free to reach out – I’d love to hear from you!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  projectIntro1,
  projects,
  wbs,
  dashboard,
};
