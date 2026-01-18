import { Project } from './project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Sales Performance Analysis Dashboard',
    description:
      'Interactive dashboard to analyze sales trends, revenue growth, and regional performance for business decision-making.',
    category: 'Data Analytics',
    technologies: ['Power BI', 'SQL', 'Excel'],
    githubUrl: 'https://github.com/yourname/sales-performance-dashboard'
  },
  {
    id: 2,
    title: 'Customer Churn Analysis',
    description:
      'Analyzed customer behavior to identify churn patterns and provide actionable insights to improve customer retention.',
    category: 'Data Analytics',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/yourname/customer-churn-analysis'
  },
  {
    id: 3,
    title: 'HR Analytics Dashboard',
    description:
      'Developed an HR dashboard to track employee attrition, performance metrics, and workforce distribution.',
    category: 'Business Intelligence',
    technologies: ['Tableau', 'Excel', 'SQL'],
    githubUrl: 'https://github.com/yourname/hr-analytics-dashboard'
  },
  {
    id: 4,
    title: 'E-commerce Data Analysis',
    description:
      'Performed exploratory data analysis on e-commerce data to uncover customer purchasing patterns and product insights.',
    category: 'Data Analysis',
    technologies: ['Python', 'NumPy', 'Pandas', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/yourname/ecommerce-data-analysis'
  },
  {
    id: 5,
    title: 'Financial KPI Analysis',
    description:
      'Analyzed financial KPIs such as profit margin, expenses, and revenue trends to support strategic planning.',
    category: 'Analytics',
    technologies: ['Power BI', 'Excel'],
    githubUrl: 'https://github.com/yourname/financial-kpi-analysis'
  }
]
