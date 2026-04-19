import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defIMG from '../../assests/DefaultIMG.jpg';
import { AuthContext } from '../../../context/AuthContext';
import { SquarePen, X } from 'lucide-react';

const MyProfile = () => {
    const navigate = useNavigate();

    const { AuthUser, updateProfile } = useContext(AuthContext);
    const [isopen, setisopen] = useState(false);
    const [name, setName] = useState(AuthUser.Name);
    const [selectedImg, setSelectedImg] = useState(null);
    const [bio, setBio] = useState(AuthUser.bio);

    // functions
    const toggleFormBtn = () => setisopen(true);
    const closedFormBtn = () => setisopen(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedImg) {
            await updateProfile({ Name: name, bio });
            navigate('/chat');
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(selectedImg);
        reader.onload = async () => {
            const base64Image = reader.result;
            await updateProfile({ profilePic: base64Image, Name: name, bio });
            navigate('/chat');
        }
    }
    return (
        <div className='w-full h-screen bg-gray-800 flex justify-center items-center relative'>
            {/* Main Profile Card */}
            <div className='bg-gray-900 border rounded-xl text-white border-gray-500 p-8 w-180 h-120 flex flex-col justify-between items-center'>
                <div className='h-full gap-20 flex flex-row items-center justify-center'>
                    <img src={AuthUser.profilePic == '' ? defIMG : AuthUser.profilePic} className='w-40 h-40 rounded-full bg-amber-400 object-cover' alt="Profile" />
                    <div className='flex flex-col gap-4'>
                        <div className='gap-5 flex items-center flex-row'>
                            <h2 className='font-bold text-3xl'>{AuthUser?.Name || "User"}</h2>
                            {/* Click pen to open form */}
                            <SquarePen onClick={toggleFormBtn} className='cursor-pointer hover:text-blue-400 transition-colors' />
                        </div>
                        <h3 className='text-2xl text-gray-400'>{AuthUser?.bio || "Hello guys, welcome to my website"}</h3>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/chat')}
                    className='bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 cursor-pointer transition-all duration-200'
                >
                    Back to Chat
                </button>
            </div>

            {/* --- POPUP FORM MODAL --- */}
            {isopen && (
                <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50'>
                    <div className='bg-gray-900 border border-gray-700 p-8 rounded-2xl w-96 shadow-2xl relative animate-in fade-in zoom-in duration-200'>
                        {/* Close Icon */}
                        <button onClick={closedFormBtn} className='absolute top-4 right-4 text-gray-400 hover:text-white'>
                            <X size={24} />
                        </button>

                        <h2 className='text-white text-2xl font-bold mb-6'>Edit Profile</h2>

                        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='avater' className='text-gray-300 text-2xl gap-2 flex flex-col items-center justify-center '>
                                    <img
                                        src={selectedImg ? URL.createObjectURL(selectedImg) : defIMG}
                                        alt=""
                                        className='w-40 h-40 rounded-full bg-amber-400 object-cover'
                                    />
                                    <input
                                        type="file"
                                        id='avater'
                                        accept='.png, .jpg , .jpeg'
                                        onChange={(e) => setSelectedImg(e.target.files[0])}
                                        hidden
                                        className='bg-gray-800 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                    profile pic
                                </label>
                            </div>
                            <label className='text-gray-300 text-sm'>Display Name</label>
                            <input
                                type="text"
                                onChange={(elem) => setName(elem.target.value)}
                                className='bg-gray-800 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                                defaultValue={AuthUser?.Name}
                            />
                            <label className='text-gray-300 text-sm'>Tag line</label>
                            <input
                                type="text"
                                onChange={(elem) => setBio(elem.target.value)}
                                className='bg-gray-800 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                                defaultValue="Hello guys, welcome to my website"
                            />

                            <button
                                className='mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition-colors'
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyProfile;
