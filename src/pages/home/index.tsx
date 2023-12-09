import { Heading, Text } from '@enoque-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '@/assets/calendar.png'
import { ClaimUserNameForm } from './components/ClaimUserNameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Simplify your schedule | Ignite Call"
        description="Connect your calendar and let people book appointments in their free
        time."
      />

      <Container>
        <Hero>
          <Heading size="4xl" as="h1">
            Simplified Scheduling
          </Heading>

          <Text size="lg">
            Connect your calendar and let people book appointments in their free
            time.
          </Text>

          <ClaimUserNameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendar symbolizing application in operation"
          />
        </Preview>
      </Container>
    </>
  )
}
