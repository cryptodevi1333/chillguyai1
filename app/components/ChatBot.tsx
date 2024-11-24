'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'

export default function ChatBot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [{ role: 'assistant', content: 'hey, chill guy here' }],
    api: '/api/chat', // This will point to our API route
  })

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4 h-64 overflow-y-auto bg-gray-100 rounded-lg p-4">
        {messages.map(m => (
          <div key={m.id} className={`mb-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-[#52afe6] text-white' : 'bg-[#e55d2d] text-white'}`}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="flex-grow mr-2 p-2 border rounded-lg font-indie-flower"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something chill..."
        />
        <button className="bg-[#e55d2d] text-white px-4 py-2 rounded-lg font-luckiest-guy" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

