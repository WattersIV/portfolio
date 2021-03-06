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
    end: 'Mar 2021',
    link: 'https://www.honeybeehub.io',
    keyPoints: [
      'Built a full stack referral system on the platform which created a large boost to the number of active users.',
      'Developed a new feature to facilitate the transfer of money on the web application between users.', 
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