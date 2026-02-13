import React from 'react';

function CentersCard({ id, name, place, state }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-gray-thin dark:border-gray-700 rounded-xl shadow-lg p-6 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
      <h3 className="text-sm  text-green-400 dark:text-blue-400 mb-1">
        Center ID: {id}
      </h3>
      <h2 className="text-xl  text-gray-800 dark:text-white mb-2">
        {name}
      </h2>
      <p className="text-white-600 dark:text-gray-300">
        <span className="text-gray-400 font-light">Place:</span> {place}
      </p>
      <p className="text-white-100 dark:text-gray-300">
        <span className="text-gray-400 font-light">State:</span> {state}
      </p>
    </div>
  );
}

export default CentersCard;