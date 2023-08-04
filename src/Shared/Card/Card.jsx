import  { useState } from 'react';

const Card = ({ data }) => {
    const {image, name, rating, date_of_birth, goals, } = data;
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Rating: {rating}</p>
        <p className="text-gray-600">Date of Birth: {date_of_birth}</p>
        <p className="text-gray-600">Goals: {goals}</p>
        <button
          onClick={toggleDetails}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Events:</h3>
            <ul className="list-disc list-inside">
              {data.events.map((event, index) => (
                <li key={index}>
                  {event.name} - {event.date} ({event.result})
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-4">Sports Facilities:</h3>
            <ul className="list-disc list-inside">
              {data.sports_facilities.map((facility, index) => (
                <li key={index}>
                  {facility.name} - {facility.location}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;