import React from 'react';
import IMG0 from '../../assets/stream_inherrit.png'
import IMG1 from '../../assets/WAGGARRARI.png';
import IMG2 from '../../assets/ricardian AI.png';
import IMG3 from '../../assets/guardRisk.png';
import IMG4 from '../../assets/tiola-video.png';
import IMG5 from '../../assets/infraDAO.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 0,
      title: 'Stream -Inherrit',
      img: IMG0,
      description:
        'A legacy planning platform that empowers users to securely transmit assets to their loved ones over time, utilizing the reliability of XRP.',
      technologies: 'react | css | XRP',
      link: 'https://stream-inheritance.vercel.app/',
      github: 'https://github.com/ZadenMubarak/stream-inheritance',
    },
    {
      id: 1,
      title: 'WAGGARRARI',
      img: IMG1,
      description:
        'New crypto meme coin',
      technologies: 'react | css',
      link: 'https://waggarrari.vercel.app/',
      github: 'https://github.com/ZadenMubarak/waggarrari',
    },
    {
      id: 2,
      title: 'Tiola Videos sharing platform',
      img: IMG4,
      description:
        'A desktop only Youtube like app built on the blockchain for viewing shard videos, the app is still in',
      technologies: 'React | Redux',
      link: 'https://tiola-video.vercel.app/',
      github: 'https://github.com/ZadenMubarak/tiola-video',
    },
    {
      id: 3,
      title: 'Ricardian AI',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | Webpack',
      link: 'https://riccardian-ai.vercel.app/',
      github: 'https://github.com/IKalonji/RiccardianAI',
    },
    {
      id: 4,
      title: 'GuardRIsk',
      img: IMG3,
      description:
        'A Desktop insurance application that uses the blockchain for storage and payments.',
      technologies: 'React | CSS',
      link: 'https://guard-risk.vercel.app/',
      github: 'https://github.com/IKalonji/GuardRisk',
    },
    {
      id: 5,
      title: 'Infra DAO',
      img: IMG5,
      description:
        'A Blockchain based Decentralized Autonomous Organization, that allows for crowdfunding, infrastructure projects',
      technologies: 'JavaScript | CSS',
      link: 'https://infra-dao.vercel.app/',
      github: 'https://github.com/IKalonji/InfraDAO',
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
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
