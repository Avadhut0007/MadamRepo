import { Experience } from './experience.model';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: 'Executive Performance Engineer',
    company: 'Vodafone Intelligent Solutions (VOIS)',
    duration: 'May 2025 – Present',
    location: 'India',
    description: [
      'Managed 24/7 production support for Linux-based systems, handling troubleshooting, log analysis, and performance tuning.',
      'Administered AWS services including EC2, IAM, and CloudWatch for application hosting and monitoring.',
      'Managed incidents using the ELK Stack, and coordinating across support teams.'
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL']
  }
];
