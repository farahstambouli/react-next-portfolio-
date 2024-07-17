// export default function Projects() {
//     return (
//       <div>
//         <h1>My Projects</h1>
//         <p>This is the projects page.</p>
//       </div>
//     );
//   }
  
// pages/projects.js

import styles from '../styles/Projects.module.css';

// Sample data for projects
const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    imageUrl: '/images/project1.jpg', // Path to your project image
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    imageUrl: '/images/project2.jpg', // Path to your project image
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3.',
    imageUrl: '/images/project3.jpg', // Path to your project image
  },
];

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1>My Projects</h1>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

