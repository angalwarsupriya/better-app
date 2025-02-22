import React from 'react';
import './index.css'; // Custom styles for the timeline

const Timeline = () => {
  const timelineData = [
    {
      year: '2014',
      event: 'After Vishal Garg first attempted to purchase his own home, the company realized that the homebuying process is unnecessarily difficult. The company aims to use technology to simplify every step of the process, starting with the mortgage and closing, and making home finance transactions cheaper, easier, and faster for all.',
    },
    {
      year: '2015',
      event: 'Better Mortgage funds its first mortgage loan entirely online (without a single phone call).',
    },
    {
      year: '2016',
      event: 'Better Mortgage becomes a Fannie Mae approved seller/servicer and establishes relationships with top mortgage investors.',
    },
    {
      year: '2017',
      event: 'Better expands into the real estate market with Better Real Estate.',
    },
    {
      year: '2018',
      event: 'Better Mortgage partners with Ally Bank to build Ally powered by Better.',
    },
    {
      year: '2019',
      event: 'Better Mortgage launches its pilot partnership with American Express to offer a streamlined homebuying experience to AmEx customers.',
    },
    {
      year: '2021',
      event: 'Better acquires Trussle – The UK’s most innovative online mortgage broker.',
    },
    {
      year: '2022',
      event: 'Better Mortgage becomes the first fintech to fund $100 billion home loans entirely online.',
    },
    {
      year: '2023',
      event: 'Better Mortgage launches One Day Mortgage™ to help emerging customers from all backgrounds and underserved communities achieve homeownership. With One Day Mortgage™, the typical industry process of 30 days is reduced to 24 hours.',
    }
    , {
      year: '',
      event:'Better Mortgage launches the fully digital 3-day HELOC².'
    }
    , {
      year: '',
      event:'Better Mortgage launches One Day Verified Approval Letter.'
    }
    , {
      year: 'Today',
      event:'You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.'
    }
  ];

  return (
    <div className="timeline">
      <h2>Company Timeline</h2>
      {timelineData.map((item, index) => (
        <div key={index} className="timeline-entry">
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-event">{item.event}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
