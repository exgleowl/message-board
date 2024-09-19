import React from 'react'
import { Message } from '../types'
import MessageItem from './message-item'

export default function MessagesList({ messages }: { messages: Message[] }) {
  return (
    <ul className="messages-list">
      {messages.length > 0 ? (
        messages.map((message: Message) => {
          return (
            <MessageItem key={message.id} message={message} />
          )
        })
      ) : (
        <p>Not messages yet</p>
      )}
    </ul>
  )
}
