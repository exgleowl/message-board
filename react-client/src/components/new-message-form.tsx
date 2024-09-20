import { useRouter } from '@tanstack/react-router'
import { SyntheticEvent, useRef } from 'react'

export default function NewMessageForm() {
  const router = useRouter()

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const formData = new FormData(target)
    
    await fetch('/api/messages', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: formData.get('username'),
        text: formData.get('message')
      })
    })
    router.invalidate()
    target.reset()
  }

  return (
    <form className="new-message-form" onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="Username" required/>
      <label htmlFor="message">Message</label>
      <input type="text" name="message" placeholder="Message" required/>
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
      </button>
    </form>
  )
}
