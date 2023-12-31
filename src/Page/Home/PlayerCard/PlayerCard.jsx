import { useEffect, useState } from "react";
import './style.css'
import Card from "../../../Shared/Card/Card";
const PlayerCard = () => {
    const [playerData, setPlayerData] = useState([]);

    const url = 'https://sports-hub-server.vercel.app/allPlayers';
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPlayerData(data)
            console.log(data)
        })
    }, [])

    const [query, setQuery] = useState('');

    const handleSearch = event => {
        event.preventDefault();
        const search = event.target.search.value;
        setQuery(search);
    }

    const filteredPlayer = playerData.filter(post => {
    if (query === '') {
      return true;
    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
    return false;
    });

    const getRandomColleges = () => {
        const allPlayers = [...playerData];
        allPlayers.sort(() => Math.random() - 0.5);
        return allPlayers.slice(0, 2);
    };

    return (
        <div>
            <div className=" banner relative bg-gradient-to-r from-blue-500 to-purple-500 py-12">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 opacity-40 bg-black"
                />
                <div
                    className="absolute top-0 left-0 right-0 bottom-0"
                    
                />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        Welcome to our SportsHub Website
                    </h1>
                    <div className="mt-6">
                        <form onSubmit={handleSearch} className="flex items-center justify-center max-w-md mx-auto">
                        <input
                            type="text"
                            className="px-4 py-2 w-full border-2 border-transparent focus:outline-none focus:border-white rounded-l-md"
                            placeholder="Search..."
                            name="search"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-[9.5px] rounded-r-md"
                        >
                            Search
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <div className=" md:w-[1400px] w-full mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                

                {query === ''
                    ? playerData.slice(0, 6).map(data => (
                        <Card key={data._id} data={data}></Card>
                        ))
                    : filteredPlayer
                        .slice(0, 1)
                        .map(data => <Card key={data._id} data={data}></Card>)}
                    {query !== '' && getRandomColleges().map(data => (
                    <Card key={data._id} data={data}></Card>
                ))}

                
            </div>
        </div>
    );
};

export default PlayerCard;