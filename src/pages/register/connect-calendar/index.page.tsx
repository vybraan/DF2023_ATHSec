import { Button, Heading, MultiStep, Text } from '@enoque-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight, Check } from 'phosphor-react'
import { useRouter } from 'next/router'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'

export default function ConnectCalendar() {
  const router = useRouter()
  const session = useSession()

  const isSignedId = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  console.log(session)

  const hasAuthError = !!router.query.error
  return (
    <>
      <NextSeo title="Connect your Google Calendar | Ignite Call" noindex />
      <Container>
        <Header>
          <Heading> Connect Your Schedule! </Heading>
          <Text>
            Link your calendar to automatically check busy times and new events
            as they are scheduled.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            {isSignedId ? (
              <Button size="sm" disabled>
                Connected
                <Check />
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleConnectCalendar}
              >
                Connect
                <ArrowRight />
              </Button>
            )}
          </ConnectItem>

          {hasAuthError && (
            <AuthError size="sm">
              Failed to connect to Google, make sure you enable Google Calendar
              access permissions.
            </AuthError>
          )}

          <Button
            onClick={handleNavigateToNextStep}
            type="submit"
            disabled={!isSignedId}
          >
            Next step
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
