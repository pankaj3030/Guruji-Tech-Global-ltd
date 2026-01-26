export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Part-time Business Development Associates",
    type: "Part-time",
    location: "Coventry, United Kingdom (Remote)",
    description: "We are seeking motivated Business Development Associates to join our team on a part-time basis. This role is perfect for individuals who are passionate about technology and have excellent communication skills. You will be responsible for identifying new business opportunities, building relationships with potential clients, and contributing to our company's growth strategy.",
    responsibilities: [
      "Research and identify potential clients and business opportunities",
      "Develop and maintain relationships with prospective clients",
      "Present and demonstrate our IT services to potential customers",
      "Prepare and deliver compelling sales presentations and proposals",
      "Collaborate with the technical team to understand customer needs",
      "Maintain accurate records of sales activities and customer interactions",
      "Attend networking events and industry conferences to generate leads",
      "Conduct market research to identify trends and opportunities"
    ],
    requirements: [
      "Proven experience in business development or sales role",
      "Excellent communication and presentation skills",
      "Strong interpersonal and relationship-building abilities",
      "Self-motivated with a results-driven approach",
      "Basic understanding of IT services and solutions",
      "Proficiency in Microsoft Office suite",
      "Ability to work independently and as part of a team",
      "Flexible schedule availability for part-time work"
    ],
    benefits: [
      "Competitive commission structure",
      "Flexible working hours",
      "Remote work opportunities",
      "Professional development and training",
      "Opportunity to grow with the company",
      "Exposure to cutting-edge IT solutions"
    ]
  },
  {
    id: "2",
    title: "Junior IT Associates",
    type: "Full-time",
    location: "Coventry, United Kingdom",
    description: "We are looking for enthusiastic Junior IT Associates to join our growing team. This is an excellent opportunity for recent graduates or individuals starting their career in IT. You will work closely with senior technicians and gain hands-on experience across various IT domains including support, networking, cloud services, and cybersecurity.",
    responsibilities: [
      "Provide first-level IT support to clients and internal users",
      "Troubleshoot hardware, software, and network issues",
      "Assist in the setup and configuration of IT systems",
      "Monitor and maintain IT infrastructure",
      "Document technical procedures and solutions",
      "Participate in IT projects and implementations",
      "Assist with cybersecurity initiatives and best practices",
      "Learn and stay updated on new technologies and industry trends"
    ],
    requirements: [
      "Bachelor's degree in Computer Science, IT, or related field (or equivalent experience)",
      "Basic understanding of computer hardware and software",
      "Knowledge of networking fundamentals",
      "Strong problem-solving and analytical skills",
      "Excellent communication abilities",
      "Willingness to learn and take on new challenges",
      "Ability to work in a fast-paced environment",
      "Good time management and organizational skills"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Comprehensive training and mentorship program",
      "Hands-on experience with diverse IT technologies",
      "Career growth opportunities",
      "Health and wellness benefits",
      "Professional certification support"
    ]
  }
];

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};
