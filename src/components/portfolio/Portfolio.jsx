import React from 'react';
import IMG0 from '../../assets/stream_inherrit.png';
import IMG1 from '../../assets/WAGGARRARI.png';
import IMG2 from '../../assets/ricardian AI.png';
import IMG3 from '../../assets/guardRisk.png';
import IMG4 from '../../assets/tiola-video.png';
import IMG5 from '../../assets/infraDAO.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    // 🔥 FEATURED / PRODUCTION-GRADE PROJECTS
    {
      id: 0,
      title: 'AI Financial Advisor',
      type: 'featured',
      img: IMG2,
      role: 'Backend / AI Engineer',
      description:
        'An AI-powered financial advisory system designed to generate actionable insights and assist users with informed financial decisions.',
      highlights: [
        'Designed REST APIs and AI inference workflow',
        'Focused on explainability and real-world financial use cases',
        'Built modular architecture for future scalability',
      ],
      technologies: 'Python | Flask | AI | REST',
      link: '#',
      github: '#',
    },
    {
      id: 1,
      title: 'Blockchain Chronicles',
      type: 'featured',
      img: IMG1,
      role: 'Backend Engineer',
      description:
        'An educational blockchain project series demonstrating core blockchain concepts through practical, incremental implementations.',
      highlights: [
        'Implemented blockchain data structures from scratch',
        'Explored hashing, immutability, and consensus basics',
        'Documented progress publicly to demonstrate technical growth',
      ],
      technologies: 'Java | Spring Boot | Blockchain',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Smart Contract Generator',
      type: 'featured',
      img: IMG4,
      role: 'Full-Stack Developer',
      description:
        'A system that transforms legal agreements into deployable smart contracts, bridging legal logic and blockchain execution.',
      highlights: [
        'Mapped legal clauses to programmable contract logic',
        'Focused on correctness and automation',
        'Designed with real-world business use cases in mind',
      ],
      technologies: 'Solidity | JavaScript | Web3',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Axora Web Platform',
      type: 'featured',
      img: IMG0,
      role: 'Frontend Engineer',
      description:
        'A business-facing web platform focused on clarity, performance, and conversion-driven design.',
      highlights: [
        'Built reusable React components',
        'Optimized UI for responsiveness and usability',
        'Deployed and maintained production builds',
      ],
      technologies: 'React | CSS | Vercel',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Event Landing System',
      type: 'featured',
      img: IMG3,
      role: 'Frontend Engineer',
      description:
        'A high-conversion landing page system built to support event marketing and online campaigns.',
      highlights: [
        'Implemented conversion-focused layouts',
        'Emphasized UX clarity and responsiveness',
        'Designed for fast iteration and reuse',
      ],
      technologies: 'React | Tailwind | UX',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Developer Task Hub',
      type: 'featured',
      img: IMG5,
      role: 'Full-Stack Developer',
      description:
        'A lightweight productivity tool enabling developers to organize and track tasks efficiently.',
      highlights: [
        'Designed simple but effective task workflows',
        'Focused on performance and maintainability',
        'Built with extensibility in mind',
      ],
      technologies: 'React | Node.js',
      link: '#',
      github: '#',
    },

    // 🧪 OTHER / EXPERIMENTAL & HACKATHON PROJECTS
    {
      id: 6,
      title: 'Stream – Inherit',
      type: 'other',
      img: IMG0,
      role: 'Full-Stack Developer',
      description:
        'A legacy planning platform enabling users to securely transmit digital assets to beneficiaries over time using XRP.',
      highlights: [
        'Integrated blockchain-based asset transfers',
        'Designed secure and user-friendly workflows',
        'Focused on long-term data reliability',
      ],
      technologies: 'React | CSS | XRP',
      link: 'https://stream-inheritance.vercel.app/',
      github: 'https://github.com/ZadenMubarak/stream-inheritance',
    },
    {
      id: 7,
      title: 'WAGGARRARI – Web3 Token Launch',
      type: 'other',
      img: IMG1,
      role: 'Frontend Developer',
      description:
        'An experimental Web3 token launch project exploring branding, community engagement, and rapid deployment.',
      highlights: [
        'Built and deployed marketing website',
        'Explored Web3 project lifecycles',
        'Focused on speed and iteration',
      ],
      technologies: 'React | CSS',
      link: 'https://waggarrari.vercel.app/',
      github: 'https://github.com/ZadenMubarak/waggarrari',
    },
    {
      id: 8,
      title: 'Tiola – Decentralized Video Platform',
      type: 'other',
      img: IMG4,
      role: 'Frontend Developer',
      description:
        'A desktop-first, YouTube-like video platform leveraging blockchain concepts for content sharing.',
      highlights: [
        'Implemented Redux-based state management',
        'Designed media-focused UI components',
        'Explored decentralized media concepts',
      ],
      technologies: 'React | Redux',
      link: 'https://tiola-video.vercel.app/',
      github: 'https://github.com/ZadenMubarak/tiola-video',
    },
    {
      id: 9,
      title: 'Ricardian AI',
      type: 'other',
      img: IMG2,
      role: 'Full-Stack Developer',
      description:
        'A productivity-focused AI application designed to help users plan their day and manage tasks effectively.',
      highlights: [
        'Built RESTful backend services',
        'Integrated frontend with API-driven logic',
        'Focused on usability and clarity',
      ],
      technologies: 'React | Node.js | REST API',
      link: 'https://riccardian-ai.vercel.app/',
      github: 'https://github.com/IKalonji/RiccardianAI',
    },
    {
      id: 10,
      title: 'GuardRisk',
      type: 'other',
      img: IMG3,
      role: 'Frontend Developer',
      description:
        'A desktop insurance application utilizing blockchain concepts for secure data storage and payment processing.',
      highlights: [
        'Implemented responsive UI components',
        'Explored blockchain-backed data integrity',
        'Collaborated in a team-based environment',
      ],
      technologies: 'React | CSS',
      link: 'https://guard-risk.vercel.app/',
      github: 'https://github.com/IKalonji/GuardRisk',
    },
    {
      id: 11,
      title: 'Infra DAO',
      type: 'other',
      img: IMG5,
      role: 'Frontend Developer',
      description:
        'A blockchain-based DAO platform enabling crowdfunding for infrastructure-focused initiatives.',
      highlights: [
        'Built UI for decentralized governance concepts',
        'Explored DAO funding workflows',
        'Focused on accessibility and clarity',
      ],
      technologies: 'JavaScript | CSS',
      link: 'https://infra-dao.vercel.app/',
      github: 'https://github.com/IKalonji/InfraDAO',
    },
  ];

  const featuredProjects = soloProjects.filter(
    (project) => project.type === 'featured'
  );
  const otherProjects = soloProjects.filter(
    (project) => project.type !== 'featured'
  );

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Featured Projects</h2>


      {/* <div className="container portfolio__container">
        {featuredProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p><strong>Role:</strong> {pro.role}</p>
              <p>{pro.description}</p>
              <ul>
                {pro.highlights.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a href={pro.github} target="_blank" className="btn" rel="noreferrer">
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div> */}

      <h2 style={{ marginTop: '4rem' }}>Other Projects</h2>

      <div className="container portfolio__container">
        {otherProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p><strong>Role:</strong> {pro.role}</p>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a href={pro.github} target="_blank" className="btn" rel="noreferrer">
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


// import React from 'react';
// import IMG0 from '../../assets/stream_inherrit.png'
// import IMG1 from '../../assets/WAGGARRARI.png';
// import IMG2 from '../../assets/ricardian AI.png';
// import IMG3 from '../../assets/guardRisk.png';
// import IMG4 from '../../assets/tiola-video.png';
// import IMG5 from '../../assets/infraDAO.png';

// import './portfolio.css';

// const Portfolio = () => {
//   const soloProjects = [
//     {
//       id: 0,
//       title: 'Stream -Inherrit',
//       img: IMG0,
//       description:
//         'A legacy planning platform that empowers users to securely transmit assets to their loved ones over time, utilizing the reliability of XRP.',
//       technologies: 'react | css | XRP',
//       link: 'https://stream-inheritance.vercel.app/',
//       github: 'https://github.com/ZadenMubarak/stream-inheritance',
//     },

//     {
//       id: 1,
//       title: 'WAGGARRARI',
//       img: IMG1,
//       description:
//         'New crypto meme coin',
//       technologies: 'react | css',
//       link: 'https://waggarrari.vercel.app/',
//       github: 'https://github.com/ZadenMubarak/waggarrari',
//     },
    
//     {
//       id: 2,
//       title: 'Tiola Videos sharing platform',
//       img: IMG4,
//       description:
//         'A desktop only Youtube like app built on the blockchain for viewing shard videos, the app is still in',
//       technologies: 'React | Redux',
//       link: 'https://tiola-video.vercel.app/',
//       github: 'https://github.com/ZadenMubarak/tiola-video',
//     },
//     {
//       id: 3,
//       title: 'Ricardian AI',
//       img: IMG2,
//       description: 'User friendly app to plan your day and manage tasks',
//       technologies: 'React | NodeJS | REST API',
//       link: 'https://riccardian-ai.vercel.app/',
//       github: 'https://github.com/IKalonji/RiccardianAI',
//     },
//     {
//       id: 4,
//       title: 'GuardRIsk',
//       img: IMG3,
//       description:
//         'A Desktop insurance application that uses the blockchain for storage and payments.',
//       technologies: 'React | CSS',
//       link: 'https://guard-risk.vercel.app/',
//       github: 'https://github.com/IKalonji/GuardRisk',
//     },
//     {
//       id: 5,
//       title: 'Infra DAO',
//       img: IMG5,
//       description:
//         'A Blockchain based Decentralized Autonomous Organization, that allows for crowdfunding, infrastructure projects',
//       technologies: 'JavaScript | CSS',
//       link: 'https://infra-dao.vercel.app/',
//       github: 'https://github.com/IKalonji/InfraDAO',
//     },
    
//   ];

//   return (
//     <section id="portfolio">
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {soloProjects.map((pro) => (
//           <article className="portfolio__item" key={pro.id}>
//             <div className="portfolio__item-image">
//               <img src={pro.img} alt={pro.title} />
//             </div>
//             <div className="portfolio__item-content">
//               <h3>{pro.title}</h3>
//               <p>{pro.description}</p>
//               <p>{pro.technologies}</p>
//             </div>
//             <div className="portfolio__item-cta">
//               <a
//                 href={pro.github}
//                 target="_blank"
//                 className="btn"
//                 rel="noreferrer"
//               >
//                 GitHub
//               </a>
//               <a
//                 href={pro.link}
//                 target="_blank"
//                 className="btn btn-primary"
//                 rel="noreferrer"
//               >
//                 Visit Website !
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
