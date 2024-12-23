'use client';

import { useEffect, useState } from "react";

export default function WebHeader({ reconstructedUrl }) {
    const [domain, setDomain] = useState('');

    const extractDomain = (url) => {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.hostname.replace('www.', '');
        } catch {
            return 'Invalid URL';
        }
    };

    useEffect(() => {
        const initialize = async () => {
            if (!reconstructedUrl) return;

            const extractedDomain = extractDomain(reconstructedUrl);
            setDomain(extractedDomain);
        };

        initialize();
    }, [reconstructedUrl]);

    return (
        <header className='bg-white shadow-lg sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto flex justify-center items-center px-4 py-2 md:px-6 md:py-4'>
                <div className='flex items-center gap-2'>
                    <span className='text-3xl font-bold'>
                        {domain !== 'Invalid URL' ? domain : 'Your Website'}
                    </span>
                </div>
            </div>
        </header>
    );
}
