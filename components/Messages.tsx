import { type Message as TMessage } from 'ai/react';
import Message from './Message';
import { MessageSquare } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface MessagesProps {
    messages: TMessage[]
}

export const Messages = ({ messages }: MessagesProps) => {
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className='flex flex-col flex-1 overflow-y-auto max-h-[calc(100vh-4rem)]'>
            {messages.length ? (
                <>
                    {messages.map((message, idx) => (
                        <Message key={idx} content={message.content} isUserMessage={message.role === 'user'} />
                    ))}
                    <div ref={endOfMessagesRef} />
                </>
            ) : (
                <div className='flex-1 flex flex-col items-center justify-center gap-2'>
                    <MessageSquare className='size-8 text-blue-500' />
                    <h3 className='font-semibold text-xl text-black'>You&apos;re all set!</h3>
                    <p className='text-zinc-600 text-sm'>Ask a question to get started.</p>
                </div>
            )}
        </div>
    );
}
