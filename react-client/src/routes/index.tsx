import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import MessagesList from '../components/messages-list'

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: async () => {
    try {
      const res = await fetch('/api/messages', {
        method: 'GET'
      })
      const data = await res.json()
      return data
    } catch (err) {
      console.error(err)
    }
  }
})

function HomeComponent() {
  const messages = Route.useLoaderData()
  return (
    <main>
      <MessagesList messages={messages} />
    </main>
  )
}
