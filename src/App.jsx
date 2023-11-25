import { useEffect, useContext, useState } from 'react';
import { createClient } from 'pexels';
import DataContext from './context/DataContext';
import Gallery from './components/Gallery';
import Loading from './components/Loading';


function App() {
  const {setData } = useContext(DataContext);
  const client = createClient('ahXzyo8ZET5H3VRqEdAH00XdpsqB4nfF7QsnLUnCRoMawFyejSABh1pH');

  // --------------states-------------------
  const [quickSearch] = useState(['Cloths', 'Nature', 'Landscape', 'Office', 'Beach', 'Food', 'Game']);
  const [query, setQuery] = useState(quickSearch);
  const [searchQuery, setSearchQuery] = useState('');
  const [imageQty, setImageQty] = useState(24);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    client.photos.search({ query, per_page: imageQty })
      .then(photos => {
        setLoading(false);
        setData(photos.photos);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [query, imageQty]);

  const searchPhotos = () => {
    setQuery(searchQuery)
  };

  const loadMore = () => {
    setLoading(true);
    setImageQty(imageQty + 20);
  };

  return (
    <div className="p-8 bg-gray-900 text-white   shadow-2xl w-full h-full text-center">

      <h1 className="text-4xl font-extrabold text-blue-500 mb-6">Image Gallery</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search image..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border-2 border-blue-500 bg-gray-800 h-12 px-6 rounded-full text-lg focus:outline-none focus:border-blue-300 transition duration-300 ease-in-out"
        />
        <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
          onClick={searchPhotos}
        >
          Search
        </button>
      </div>

      {
        loading? <Loading/>:
        <div>
        <ul className="mt-4 flex space-x-4 justify-around">
          {quickSearch.map((type, index) => (
            <li key={index}>
              <button
                onClick={(e) => {
                  setQuery([e.target.innerHTML])
                }}
                className=" bg-blue-400 hover:text-blue-600 focus:outline-none focus:underline"
              >
                {type}
              </button>
            </li>
          ))}
        </ul>
        <Gallery />
        <button
          onClick={loadMore}
          className="inline-flex items-center mt-10 bg-blue-400 border-0 py-1 px-3 focus:outline-none
       hover:bg-blue-600 rounded text-base">Load more....
        </button>
      </div>}


    </div>




  )
}

export default App;
