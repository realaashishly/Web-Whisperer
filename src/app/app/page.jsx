'use client';

import WebInput from '@/components/urlinput';

export default function Home() {
    return (
        <div className='flex min-h-screen flex-col items-center pt-10 px-4 z-10 relative sm:justify-center'>
            <div className='w-full max-w-screen-sm'>
                <div className=''>
                    <div className='flex flex-row space-x-1 items-center justify-center'>
                        <h1 className='text-center text-3xl font-bold tracking-tight sm:text-5xl'>
                            Web Whisperer
                        </h1>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-12 h-12'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            color='#000000'
                            fill='none'
                        >
                            <path
                                d='M11.5379 8.32172C11.6966 7.89276 12.3034 7.89276 12.4621 8.32172L13.1735 10.2443C13.2733 10.514 13.486 10.7267 13.7557 10.8265L15.6783 11.5379C16.1072 11.6966 16.1072 12.3034 15.6783 12.4621L13.7557 13.1735C13.486 13.2733 13.2733 13.486 13.1735 13.7557L12.4621 15.6783C12.3034 16.1072 11.6966 16.1072 11.5379 15.6783L10.8265 13.7557C10.7267 13.486 10.514 13.2733 10.2443 13.1735L8.32172 12.4621C7.89276 12.3034 7.89276 11.6966 8.32172 11.5379L10.2443 10.8265C10.514 10.7267 10.7267 10.514 10.8265 10.2443L11.5379 8.32172Z'
                                stroke='currentColor'
                                strokeWidth='1.5'
                            />
                            <circle
                                cx='12'
                                cy='12'
                                r='10'
                                stroke='currentColor'
                                strokeWidth='1.5'
                            />
                            <path
                                d='M8 8C8.67327 4.46819 10.2109 2 12 2C13.7891 2 15.3267 4.46819 16 8'
                                stroke='currentColor'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M8 16C8.67327 19.5318 10.2109 22 12 22C13.7891 22 15.3267 19.5318 16 16'
                                stroke='currentColor'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M2 12H4.5M22 12H19.5'
                                stroke='currentColor'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>
                    <p className='mt-1 md:mt-3 text-center text-sm md:text-lg'>
                        Browse any website with AI embeddings technology
                    </p>
                </div>
                <WebInput />
            </div>
        </div>
    );
}