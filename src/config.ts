export const githubURL = 'https://github.com/WattersIV'
export const linkedInURL = 'https://www.linkedin.com/in/bill-watters/'
export const emailAddy = 'billywatters13@gmail.com'

interface IJobs {
  company: string,
  title: string,
  start: string,
  end: string,
  link?: string,
  keyPoints: string[],
}

export const devJobs: IJobs[] = [
  {
    company: 'Honeybee',
    title: 'Full Stack Developer Intern',
    start: 'Jan 2021',
    end: 'Present',
    link: 'https://www.honeybeehub.io',
    keyPoints: [
      'Led the front end development for a referral system which generated a 36% increase in active users.',
      'Developed a new full stack feature to facilitate the transfer of money on the web application between users.', 
      'Redesigned and optimized the login and authorization systems on the front and back end.'
    ]
  }
]

export const otherJobs: IJobs[] = [
  {
    company: 'Families 1st',
    title: 'Group Home Support Worker',
    start: 'Nov 2019',
    end: 'Sept 2020',
    keyPoints: [
      'Implemented and carried out behavioural support plans for individuals with a variety of challenging needs.',
      'Fulfilled the daily care and treatment for individuals with a variety of disabilities.', 
      'Responded to the behavioural issues of clients within the home and wrote detailed reports of the incidents.'
    ]
  },
  {
    company: 'XII Mile Lounge',
    title: 'Security Guard',
    start: 'Jan 2019',
    end: 'Jan 2020',
    keyPoints: [
      'Identified escalating situations and used verbal de-escalation techniques to prevent altercations from becoming dangerous for the individuals involved and others.',
      'Detected individuals who pose a threat to themselves or others to be proactive in identifying dangerous situations on the premises.', 
      'Maintained an even-tempered attitude while removing aggravated patrons from the property.'
    ]
  },
  {
    company: 'Niagara Parks',
    title: 'Security Guard',
    start: 'May 2019',
    end: 'Nov 2020',
    keyPoints: [
      'Inspected all incoming bags to ensure the safety and enjoyment of thousands of tourists each day.',
      'Performed patrols of the property to deliver customer service and respond to emergencies or other concerns.', 
      'Communicated with the police and other emergency responders in order to quickly and safely respond to emergencies.'
    ]
  },
  {
    company: 'Brock University Student Union',
    title: 'Security Guard',
    start: 'Aug 2018',
    end: 'Mar 2019',
    keyPoints: [
      'Enforced the legal drinking age by checking identification cards prior to patrons entering the building.',
      'Evaluated patrons wishing to enter the bar for signs and symptoms of being too intoxicated or under the influence of drugs.', 
    ]
  },
  {
    company: 'GardaWorld',
    title: 'Security Guard',
    start: 'June 2017',
    end: 'Sept 2018',
    keyPoints: [
      'Wrote and maintained a log of incidents that transpired on the property for the use of the police and court cases.',
      'Enforced city by-laws by writing parking tickets on the hospital grounds.', 
      'Collected and appropriately distributed confidential information to workers in the hospital.'
    ]
  },
]

export const volunteering: IJobs[] = [
  {
    company: 'Childrens Movement Program',
    title: 'Movement Partner',
    start: 'Jan 2019',
    end: 'March 2019',
    keyPoints: [
      'Coached and assisted typically developing and special needs children’s development of motor skills in group and one-on-one interaction.',
      'Worked one-on-one with an autistic, non-verbal child and facilitated the program to suit the child’s individual needs.' 

    ]
  },
  {
    company: 'Watters Family Daycare',
    title: 'Volunteer',
    start: 'Sept 2013',
    end: 'Sept 2018',
    keyPoints: [
      'Assisted in the child care of individuals with severe Downs Syndrome on a daily basis.',
    ]
  }
]

interface Project {
  title: string,
  description: string,
  stack: string[],
  githubURL: string,
  link?: string,
  finished: boolean
}

export const projects: Project[] = [
  {
    title: 'Herdr',
    description: 'This project is a Tinder-like app where users can swipe and talk to goats. It will also track what attributes are present on goats you tend to swipe right on.',
    stack: [],
    githubURL: 'https://github.com/csjohn1/herdr',
    finished: false
  },
  {
    title: 'Community Soccer',
    description: "A web app to find soccer games in your community. This app allows for users to create, find and join soccer matches in their community. Users may also chat with each other directly in the app. This app utilizes the google maps API for the players location in order to find events close to them.",
    stack: ['React.js', 'Express', 'Node.js', 'PostgreSQL'],
    githubURL: 'https://github.com/WattersIV/community-sports',
    finished: true
  },
  {
    title: 'Scheduler',
    description: "A scheduling application that allows users to book interviews from a selected group of interviewers. The app features a visualization of opening time slots throughout the day and week.",
    stack: ['React.js', 'Express', 'Node.js', 'PostgreSQL'],
    githubURL: 'https://github.com/WattersIV/scheduler',
    finished: true
  },
  {
    title: 'Jungle Rails',
    description: "An ecommerce platform that uses the stripe API for buying and selling items. Owners are able to log into an admin portal to change prices and items.",
    stack: ['HTML', 'CSS', 'Ruby on Rails'],
    githubURL: 'https://github.com/WattersIV/jungle-rails',
    finished: true
  }
]

interface ISkills {
  icon: string,
  title: string
}

export const skills: ISkills[] = [
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    title: 'JS/Typescript ES6+'
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    title: 'CSS'
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    title: 'HTML'
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    title: 'React'
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    title: 'Node.js'
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg',
    title: 'Ruby on Rails'
  },
  {
    icon: 'https://intuz-site.imgix.net/uploads/express.svg',
    title: 'Express'
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
    title: 'MongoDB'
  },
  {
    icon: 'https://symbols.getvecta.com/stencil_28/61_sql-database-generic.a9f12e2a30.svg',
    title: 'SQL'
  },
]