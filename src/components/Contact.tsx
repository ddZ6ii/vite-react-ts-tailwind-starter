import { useState } from 'react'

import { Section, TextInput } from '@/components/ui'

export default function Contact() {
  const [email, setEmail] = useState('')

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }
  return (
    <Section className="grid place-content-center">
      <TextInput name="email" value={email} onChange={handleChange} />
    </Section>
  )
}
