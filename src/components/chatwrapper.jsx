'use client';
import { useChat } from 'ai/react';
import { ChatInput } from './ChatInput';
import { Messages } from './Messages';

export const ChatWrapper = ({ sessionId, initialMessages = [] }) => {
    const {
        messages,
        handleInputChange,
        handleSubmit,
        input,
        setInput,
        isLoading,
        error
    } = useChat({
        api: '/api/chat-stream',
        body: { sessionId },
        initialMessages,
    });

    // Static welcome message
    const welcomeMessage = `Your website is ready! Go ahead and ask any questions, and send all feedback on Twitter: [@Aashishly](https://x.com/Aashishly)`;

    // Prompt message based on message count
    const promptMessage =
        messages.length > 1 ? 'Ask another question' : 'Ask a question';

    // Render error state if there's an error
    if (error) {
        return (
            <div className="w-full text-center text-red-500">
                Your limit has been exceeded
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen h-full relative">
            {messages.length > 0 ? (
                <Messages
                    messages={messages}
                    isLoading={isLoading}
                    error={error}
                />
            ) : (
                <div className="w-full min-h-[50vh] h-full flex items-center justify-center bg-white">
                    <div className="text-center text-zinc-500">
                        {welcomeMessage}
                    </div>
                </div>
            )}

            <ChatInput
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                setInput={setInput}
                promptMessage={promptMessage}
                isLoading={isLoading}
                error={error}
            />
        </div>
    );
};
