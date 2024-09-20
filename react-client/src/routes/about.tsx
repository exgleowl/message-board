import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <main>
      <h2 style={{ color: "#bec6a0" }}>About</h2>
      <p style={{ color: "#606676" }}>A simple message board app, build with Express.js, pg-node and React</p>
    </main>
  )
}
