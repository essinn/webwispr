'use client'

import { Send } from 'lucide-react';
import { type useChat } from 'ai/react';
import { Input } from './ui/input';
import { Button } from './ui/button';

type HandleInputChange = ReturnType<typeof useChat>['handleInputChange'];
type HandleSubmit = ReturnType<typeof useChat>['handleSubmit'];
type SetInput = ReturnType<typeof useChat>['setInput'];

interface ChatInputProps {
    input: string
    handleInputChange: HandleInputChange
    handleSubmit: HandleSubmit
    setInput: SetInput
}

export const ChatInput = ({input, handleInputChange, handleSubmit, setInput}: ChatInputProps) => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-none px-4 py-4">
            <form
                onSubmit={handleSubmit}
                className="flex items-center max-w-3xl mx-auto"
            >
                <Input
                    onChange={handleInputChange}
                    value={input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit();
                            setInput('');
                        }
                    }}
                    autoFocus
                    placeholder="Message WebWispr"
                    className="flex-1 px-6 py-4 text-base text-black bg-gray-100 hover:bg-gray-50 border-none focus:outline-none focus:ring-0 rounded-full"
                />
                <Button
                    size="icon"
                    type="submit"
                    className="ml-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-2"
                >
                    <Send className="w-5 h-5" />
                </Button>
            </form>
        </div>
    )
}