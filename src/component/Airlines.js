import React from 'react';

const Airlines = () => {
  const airlines = [
    {
      name: 'Turkish Airlines',
      logo: '/turkishairlines.png',
      website: 'https://www.turkishairlines.com/',
    },
    {
      name: 'Pegasus Airlines',
      logo: '/pegasus.png',
      website: 'https://www.flypgs.com/',
    },
    {
      name: 'AnadoluJet',
      logo: '/anadolujet.png',
      website: 'https://www.anadolujet.com/',
    },
    {
      name: 'AtlasGlobal',
      logo: '/atlasglobal.png',
      website: 'https://atlasglb.esky.com.tr/',
    },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px', background: '#333', color: 'white' }}>
      <h2>Our Partnerships</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {airlines.map((airline, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <a href={airline.website} target="_blank" rel="noopener noreferrer">
              <img src={airline.logo} alt={airline.name} style={{ width: '120px', height: 'auto' }} />
            </a>
            <p>{airline.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Airlines;
