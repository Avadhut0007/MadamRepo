export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  description?: string;
}

export const CERTIFICATES_DATA: Certification[] = [
  {
    name: 'Data Analytics Essentials',
    issuer: 'Coursera',
    date: 'Jul 2024',
    credentialId: 'DAE-982134',
    description:
      'Covered core data analytics concepts including data cleaning, data visualization, and analytical thinking using real-world datasets.',
  },
  {
    name: 'SQL for Data Analysis',
    issuer: 'Udemy',
    date: 'Jun 2024',
    credentialId: 'UC-3a9f21d4-76bc-4e32-9a6e-9c41a5a9d112',
    description:
      'Focused on writing optimized SQL queries, joins, subqueries, and aggregations to analyze structured datasets.',
  },
  {
    name: 'Power BI Data Visualization',
    issuer: 'Microsoft Learn',
    date: 'May 2024',
    credentialId: 'MBI-774521',
    description:
      'Learned to create interactive dashboards, DAX measures, and data models for effective business reporting.',
  },
  {
    name: 'Python for Data Analysis',
    issuer: 'Udemy',
    date: 'Apr 2024',
    credentialId: 'UC-8f1c234b-1c21-4e9a-8c4e-2a5e7d991212',
    description:
      'Hands-on experience with Pandas, NumPy, and Matplotlib for data manipulation, analysis, and visualization.',
  }
];
