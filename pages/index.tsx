import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="bg-green-600 w-screen h-screen flex items-center justify-center">
            <div className="text-3xl font-bold text-white flex space-x-4 items-center">
                <button onClick={() => setCounter(counter - 1)} className="bg-red-600 p-4 rounded-xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>

                <div>{counter}</div>

                <button onClick={() => setCounter(counter + 1)} className="bg-red-600 p-4 rounded-xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Home;
