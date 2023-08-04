import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";



const AddPlayer = () => {
    const {user} = useContext(AuthContext);

    const handlePlayerAdd = (event) => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const userName = user?.displayName;
        const email = user?.email;
        const events = form.events.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const sports = form.sports.value;
        const details = form.details.value;

        const newPlayer = {photo, title, userName, email, events, price, rating, sports, details};
        console.log(newPlayer);

        // send data to the server
        fetch('https://sports-hub-server.vercel.app/allPlayers', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newPlayer)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        
        <div className="w-full md:w-5/6 mx-auto px-3 py-5 bg-gray-100">
            <h1 className="text-2xl font-bold my-4 text-center text-gray-600">Add A Player</h1>
            <form onSubmit={handlePlayerAdd} className="md:w-9/12 mx-auto rounded-lg bg-white shadow-lg p-8">
                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="pictureUrl" className="block font-medium">Picture URL of the Player:</label>
                    <input
                        type="text"
                        id="pictureUrl"
                        name="photo"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="name" className="block font-medium">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="title"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                </div>

                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="sellerName" className="block font-medium">Seller Name:</label>
                    <input
                        type="text"
                        id="sellerName"
                        name="userName"
                        defaultValue={user?.displayName}
                        className="border border-gray-300 p-2 w-full"
                    />
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="sellerEmail" className="block font-medium">User Email:</label>
                    <input
                        type="email"
                        id="sellerEmail"
                        name="email"
                        defaultValue={user?.email}
                        className="border border-gray-300 p-2 w-full"
                    />
                    </div>
                </div>

                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="events" className="block font-medium">Event Sub-category:</label>
                    <select
                        id="events"
                        className="border border-gray-300 p-2 w-full"
                        name="events"
                        required
                    >
                        <option value="">Select a sub-category</option>
                        <option value="Digital-pets">Championship Match</option>
                        <option value="Robot-kit">Friendly Match</option>
                        <option value="Toy-robots">Cup Final</option>
                    </select>
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="goal" className="block font-medium">Goals:</label>
                    <input
                        type="number"
                        id="goal"
                        name="goal"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                </div>
                
                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="rating" className="block font-medium">Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="sports" className="block font-medium">Sports Sub-category:</label>
                    <select
                        id="sports"
                        className="border border-gray-300 p-2 w-full"
                        name="sports"
                        required
                    >
                        <option value="">Select a sports facilities</option>
                        <option value="Stadium-ZYX">Stadium ZYX - City C</option>
                        <option value="International-Stadium">International-Stadium</option>
                        <option value="Training-Ground">Training Ground ABC</option>
                    </select>
                    </div>
                </div>
                
                <div className=" md:mb-0 mb-4">
                <label htmlFor="description" className="block font-medium">Detail Description:</label>
                <textarea
                    id="description"
                    className="border border-gray-300 p-2 w-full h-24"
                    name="details"
                    required
                ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded">
                Add Toy
                </button>
            </form>
        </div>
    );
};

export default AddPlayer;