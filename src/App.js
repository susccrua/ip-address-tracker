import { useState, useEffect } from 'react';

import background from './pattern-bg.png';
import IpInformation from './IpInformation.js'
import IpSearch from './IpSearch.js'

import Map from './Map.js'

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [position, setPosition] = useState([-32, 58]);

  return (
    <div className="flex flex-col font-rubik">
      <h1 className="absolute z-20 self-center text-3xl mt-6 text-white font-bold">IP Address Tracker</h1>
      <div className="flex flex-col justify-center items-center bg-yellow-200 z-10 top-0">
        <img className="w-auto h-1/2 lg:h-1/3 w-full" alt="bg" src={background} />
        <IpSearch setIpAddress={setIpAddress} />
        <IpInformation ipAddress={ipAddress} setPosition={setPosition} />
      </div >
      <div className="z-0">
        <Map position={position} />
      </div>
    </div>
  );
}

export default App;
