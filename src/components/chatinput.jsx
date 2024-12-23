'use client';

export const ChatInput = ({
    handleInputChange,
    handleSubmit,
    input,
    setInput,
    isLoading,
    promptMessage,
    error,
}) => {
    const handleEnter = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
            setInput('');
        }
    };

    return (
        <>
            <div className='fixed bottom-0 md:bottom-10 left-0 w-full bg-white md:bg-transparent pb-2 pt-4 border-t border-none z-20'>
                <form
                    className='relative w-full max-w-5xl px-4 mx-auto flex flex-row space-x-2 items-center md:bg-white md:p-4 md:rounded-xl md:shadow-xl'
                    onSubmit={handleSubmit}
                >
                    <div className='relative w-full rounded-lg border-2 border-transparent bg-white px-5 shadow hover:border-blue-500 flex flex-row items-center'>
                        <input
                            name='userInput'
                            id='userInput'
                            placeholder={
                                isLoading
                                    ? 'Waiting for response...'
                                    : promptMessage
                            }
                            className={`
                                    peer w-full rounded-md px-0 py-3
                                    placeholder:text-transparent focus:outline-none disabled:bg-white
                                `}
                            autoComplete='off'
                            disabled={isLoading}
                            onKeyDown={handleEnter}
                            autoFocus={false}
                            type='text'
                            value={input}
                            onChange={handleInputChange}
                        />
                        <label
                            htmlFor='email'
                            className={`
                                   pointer-events-none absolute top-0 left-0 ml-3 origin-left
                            -translate-y-1/2 transform bg-blue-500 px-1 text-sm text-white
                            transition-all duration-300 ease-in-out
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                            peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm
                            peer-focus:text-white peer-focus:bg-blue-500  rounded
                            peer-placeholder-shown:bg-white peer-disabled:animate-pulse
                                `}
                        >
                            {isLoading
                                ? 'Waiting for response...'
                                : promptMessage}
                        </label>
                    </div>
                    <div className='relative h-full flex flex-row items-center'>
                        <div className='shrink-0'>
                            {!isLoading && (
                                <button
                                    type='submit'
                                    disabled={isLoading}
                                    className='rounded-full p-1 text-white bg-blue-500 hover:bg-blue-600'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-7 h-7'
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
                            {isLoading && (
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
                </form>
            </div>
        </>
    );
};
