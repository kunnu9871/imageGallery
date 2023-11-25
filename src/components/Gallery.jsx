import {useContext } from 'react';
import DataContext from '../context/DataContext';

const Gallery = () => {
    const {data}= useContext(DataContext);
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //     {data.map(({id, photographer, src:{medium}})=> <img src={medium} alt="" key={id} /> )}
    // </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {data.map(({ id, photographer, url , src: { medium} }) => (
    <div key={id} className="group relative mt-6">
      <img
        src={medium}
        alt=""
        className="w-full h-full object-cover rounded-md transition duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg font-bold hover:underline"
        >
          View Image
        </a>
      </div>
    </div>
  ))}
</div>

  )
}

export default Gallery