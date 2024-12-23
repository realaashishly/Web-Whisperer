'use client';

import { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

function isValidUrl(url) {
    try {
        const parsedUrl = new URL(url);

        if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
            return false;
        }

        if (!parsedUrl.hostname) {
            return false;
        }

        if (parsedUrl.pathname === '') {
            return false;
        }

        return true;
    } catch (error) {
        return false;
    }
}

export default function WebInput() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); 

        if (!url.trim()) {
            setError({ message: 'Please enter a valid URL.' });
            setLoading(false);
            return;
        }

        if (!isValidUrl(url)) {
            setError({ message: 'Please enter a valid correct URL.' });
            setLoading(false);
            return;
        }

        
        const urlId = uuidv4();
        router.push(`/chat/${url}`);
    };

    return (
        <Fragment>
            <form
                className='mx-auto mt-6 max-w-2xl'
                onSubmit={handleSubmit}
            >
                <div className='relative w-full rounded-lg border-2 border-transparent bg-white px-5 shadow hover:border-blue-500 mb-4 flex flex-row items-center'>
                    <input
                        type='text'
                        name='url'
                        id='url'
                        placeholder='Paste a website URL'
                        className={`
                            peer w-full rounded-md px-3 py-3
                            placeholder:text-transparent
                            focus:border-gray-500 focus:outline-none
                        `}
                        disabled={loading}
                        autoComplete='off'
                        value={url}
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                    />
                    <label
                        htmlFor='url'
                        className={`
                            pointer-events-none absolute top-0 left-0 ml-3 origin-left
                            -translate-y-1/2 transform bg-blue-500 px-1 text-sm text-white
                            transition-all duration-300 ease-in-out
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                            peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm
                            peer-focus:text-white peer-focus:bg-blue-500  rounded
                            peer-placeholder-shown:bg-white
                        `}
                    >
                        Paste a website URL
                    </label>
                    <div className='relative h-full flex flex-col justify-center'>
                        {!loading && (
                            <button
                                type='submit'
                                disabled={loading}
                                className='rounded-full p-1 text-white bg-blue-500 hover:bg-blue-600'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-5 h-5'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <polyline points='9 18 15 12 9 6' />
                                </svg>
                            </button>
                        )}
                        {loading && (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-7 h-7 animate-spin text-blue-600'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 12a9 9 0 1 1-6.219-8.56' />
                            </svg>
                        )}
                    </div>
                </div>
                {error && (
                    <p className='text-red-500 text-sm mt-2'>{error.message}</p>
                )}
            </form>
        </Fragment>
    );
}
