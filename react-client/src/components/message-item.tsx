import { Message } from '../types'

export default function MessageItem({ message }: { message: Message }) {
  const {username, text, createdAt } = message
  const datetime = new Date(createdAt)
  return (
    <li className="message-item" >
      <span className="username">{username}</span>
      <span className="created-at">
        [{datetime.toDateString()} {datetime.getHours()}:{datetime.getMinutes()}]
      </span>:{" "}
      {text}
    </li>
  )
}
