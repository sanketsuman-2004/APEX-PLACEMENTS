import { Roadmap, InterviewQuestion, Project, Certification } from './types';
import { Briefcase, Code, Cpu, Database, Fingerprint, GitBranch, Network, Shield, TestTube2, Cloud } from 'lucide-react';

export const roadmaps: Roadmap[] = [
  { id: 'frontend', title: 'Frontend Developer', description: 'Master HTML, CSS, JavaScript, and React to build beautiful user interfaces.', icon: <Code className="h-8 w-8"/> },
  { id: 'backend', title: 'Backend Developer', description: 'Learn Node.js, databases, and APIs to power web applications.', icon: <Database className="h-8 w-8"/> },
  { id: 'fullstack', title: 'Full Stack Developer', description: 'Become proficient in both frontend and backend development.', icon: <GitBranch className="h-8 w-8"/> },
  { id: 'devops', title: 'DevOps Engineer', description: 'Understand CI/CD, cloud infrastructure, and automation.', icon: <Cloud className="h-8 w-8"/> },
  { id: 'ai-ml', title: 'AI/ML Engineer', description: 'Dive into machine learning, neural networks, and data modeling.', icon: <Cpu className="h-8 w-8"/> },
  { id: 'data-science', title: 'Data Scientist', description: 'Explore data analysis, visualization, and statistical modeling.', icon: <TestTube2 className="h-8 w-8"/> },
  { id: 'cybersecurity', title: 'Cybersecurity Analyst', description: 'Learn to protect systems, networks, and data from threats.', icon: <Shield className="h-8 w-8"/> },
];

export const interviewQuestions: InterviewQuestion[] = [
  { id: 'dsa1', category: 'DSA', question: 'What is the difference between an array and a linked list?', answer: 'Arrays are contiguous memory blocks with fixed size, offering O(1) access but slow O(n) insertion/deletion. Linked lists use pointers, allowing dynamic size and O(1) insertion/deletion but O(n) access time.' },
  { id: 'dsa2', category: 'DSA', question: 'Explain Big O notation.', answer: 'Big O notation describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it is used to classify algorithms according to how their run time or space requirements grow as the input size grows.' },
  { id: 'fe1', category: 'Frontend', question: 'What is the difference between `let`, `const`, and `var` in JavaScript?', answer: '`var` is function-scoped and can be redeclared. `let` and `const` are block-scoped. `let` can be reassigned, while `const` cannot be reassigned and must be initialized at declaration.' },
  { id: 'be1', category: 'Backend', question: 'What are RESTful APIs?', answer: 'REST (Representational State Transfer) is an architectural style for designing networked applications. A RESTful API is an API that adheres to the constraints of REST, using standard HTTP methods like GET, POST, PUT, DELETE for resource manipulation.' },
  { id: 'sd1', category: 'System Design', question: 'How would you design a URL shortener service like TinyURL?', answer: 'The design involves a unique ID generator (e.g., hash of the long URL or a distributed counter), a data store (e.g., a NoSQL database like DynamoDB or Redis) to map the short URL to the long URL, and a web server to handle redirection requests.' },
  { id: 'hr1', category: 'HR', question: 'Tell me about yourself.', answer: 'This is an opportunity to provide a brief, professional summary of your background, skills, and career goals. Structure your answer around: Present, Past, and Future. Talk about your current role, your past experiences relevant to the job, and what you are looking to do next.' },
];

export const projects: Project[] = [
  { id: 'p1', title: 'Personal Portfolio Website', description: 'Showcase your skills and projects. A must-have for any developer.', level: 'Beginner', tech: ['HTML', 'CSS', 'JavaScript'] },
  { id: 'p2', title: 'E-commerce Platform', description: 'Build a fully functional online store with product listings, a shopping cart, and a checkout process.', level: 'Intermediate', tech: ['React', 'Node.js', 'Express', 'MongoDB'] },
  { id: 'p3', title: 'Real-time Chat Application', description: 'Create a chat app using WebSockets for instant messaging between users.', level: 'Intermediate', tech: ['React', 'Node.js', 'Socket.io'] },
  { id: 'p4', title: 'AI-Powered News Summarizer', description: 'Use natural language processing to summarize news articles from various sources.', level: 'Advanced', tech: ['Python', 'Flask', 'Hugging Face Transformers'] },
  { id: 'p5', title: 'Cloud-Based File Storage', description: 'Develop a service like Dropbox or Google Drive for uploading, storing, and sharing files.', level: 'Advanced', tech: ['Next.js', 'Firebase Storage', 'Firebase Auth'] },
];

export const certifications: Certification[] = [
  { id: 'c1', title: 'Google IT Automation with Python', company: 'Google', domain: 'Cloud', description: 'Learn to program with Python and use Python to automate common system administration tasks.', link: '#' },
  { id: 'c2', title: 'Microsoft Azure Fundamentals', company: 'Microsoft', domain: 'Cloud', description: 'A foundational certification for understanding cloud services with Microsoft Azure.', link: '#' },
  { id: 'c3', title: 'AWS Certified Cloud Practitioner', company: 'Amazon', domain: 'Cloud', description: 'Gain an overall understanding of the AWS Cloud, independent of specific technical roles.', link: '#' },
  { id: 'c4', title: 'Meta Front-End Developer', company: 'Meta', domain: 'Web Development', description: 'Master the basics of web development with HTML, CSS, JavaScript, and React.', link: '#' },
  { id: 'c5', title: 'Certified in Cybersecurity (CC)', company: 'Other', domain: 'Cybersecurity', description: 'An entry-level certification from (ISC)² to start your career in cybersecurity.', link: '#' },
];
