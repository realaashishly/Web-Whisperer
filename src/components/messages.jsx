import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

export const Messages = ({ messages, isLoading, error }) => {
    console.log('error from messages: ', error);

   

    return (
        <main className='relative overflow-hidden flex flex-col justify-between items-center p-1 h-full sm:p-2 pt-20 md:pt-28 w-full max-w-5xl mx-auto'>
            <div className='w-full rounded flex flex-col space-y-5 px-2 pt-4 pb-[20vh]'>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={classNames(
                            'flex flex-col py-2 px-4 rounded-lg w-[94%]',
                            message.role === 'user' &&
                                'bg-blue-500 text-white self-end',
                            message.role === 'assistant' &&
                                'bg-gray-400 text-white self-start',
                            isLoading &&
                                index === messages.length - 1 &&
                                'animate-pulse'
                        )}
                    >
                        <div className='w-full [&>a]:underline'>
                            <ReactMarkdown
                                linkTarget='_blank'
                                className='[&>a]:underline whitespace-pre-wrap'
                            >
                                {message.content}
                            </ReactMarkdown>
                        </div>

                        {message.role === 'assistant' && (
                            <div className='w-full flex flex-row space-x-1 opacity-80 justify-start'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-4'
                                    viewBox='0 0 24 24'
                                    width='24'
                                    height='24'
                                    color='#ffffff'
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
                                <p className='text-xs uppercase'>
                                    Web Whisperer
                                </p>
                            </div>
                        )}

                        {message.role === 'user' && (
                            <div className='w-full flex flex-row space-x-1 opacity-80 justify-end'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-4 shrink-0'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
                                    <circle
                                        cx='12'
                                        cy='7'
                                        r='4'
                                    />
                                </svg>
                                <p className='text-xs uppercase'>You</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
};
