import { cn } from '@/lib/utils'
import { Bot, User } from 'lucide-react'
import React from 'react'

interface MessageProps {
    content: string,
    isUserMessage: boolean
}

const Message = ({ content, isUserMessage }: MessageProps) => {
    return (
        <div className={cn({
            'bg-gray-100': isUserMessage,
            'bg-white': !isUserMessage,
        })}>
            <div className='p-6'>
                <div className='max-w-3xl mx-auto flex items-start gap-2.5'>
                    <div className={cn('size-10 shrink-0 aspect-square rounded-full border bg-white flex justify-center items-center', {
                        'bg-blue-600 border-blue-700 text-white': isUserMessage,
                    })}>
                        {isUserMessage ? <User className='size-5' /> : <Bot className='size-5 text-black' />}
                    </div>
                    <div className='flex flex-col ml-6 w-full'>
                        <div className='flex items-center space-x-2'>
                            <span className='text-sm font-semibold text-black'>{isUserMessage ? 'You' : 'WebWispr'}</span>
                        </div>
                        <p className='text-sm font-normal p-2.5 text-black'>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message