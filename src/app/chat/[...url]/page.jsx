import { ChatWrapper } from '@/components/chatwrapper';
import WebHeader from '@/components/webheader';
import { ragChat } from '@/lib/ragchat';
import { redis } from '@/lib/redis';
import { cookies } from 'next/headers';

function reconstructUrl(url) {
    const decodedComponents = url.map((component) =>
        decodeURIComponent(component)
    );

    return decodedComponents.join('//');
}

export default async function page({ params: { url } }) {
    const sessionCookie = cookies().get('sessionId')?.value;
    const reconstructedUrl = reconstructUrl(url);

    const sessionId = (reconstructedUrl + '--' + sessionCookie).replace(
        /\//g,
        ''
    );

    const isAlreadyIndexed = await redis.sismember(
        'indexed-urls',
        reconstructedUrl
    );

    if (!isAlreadyIndexed) {
        await ragChat.context.add({
            type: 'html',
            source: reconstructedUrl,
            config: {
                chunkOverlap: 50,
                chunkSize: 200,
            },
        });

        await redis.sadd('indexed-urls', reconstructedUrl);
    }

    const initialMessages = await ragChat.history.getMessages({
        amount: 10,
        sessionId,
    });

    return (
        <div className='w-full min-h-screen h-full relative'>
            <div className='fixed inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />
            <WebHeader reconstructedUrl={reconstructedUrl} />
            <main className='relative z-10 flex flex-col justify-between items-center p-1 h-full sm:p-2 pt-20 md:pt-28 w-full max-w-5xl mx-auto'>
                <ChatWrapper
                    sessionId={sessionId}
                    initialMessages={initialMessages}
                />
            </main>
        </div>
    );
}
