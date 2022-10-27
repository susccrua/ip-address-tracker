import background from './pattern-bg.png';
import IpInformation from './IpInformation.js'
import IpSearch from './IpSearch.js'

import Map from './Map.js'

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-yellow-200 h-screen">
      <img className="w-screen" src={background} />
      <IpSearch />
      {/* <div className="my-80"> */}

      <IpInformation />
      {/* </div> */}
      <Map />
    </div >
  );
}

export default App;
