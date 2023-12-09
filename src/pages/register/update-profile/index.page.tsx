import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from '@enoque-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormAnnotation, ProfileBox } from './styles'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const updateProfileFormSchema = z.object({
  bio: z.string(),
})

type UpdateProfileFormData = z.infer<typeof updateProfileFormSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileFormSchema),
  })

  const session = useSession()
  const router = useRouter()

  async function handleUpdateProfile(data: UpdateProfileFormData) {
    await api.put('/users/profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <>
      <NextSeo title="Update your profile | Ignite Call" noindex />
      <Container>
        <Header>
          <Heading>Set your availability</Heading>
          <Text>Finally, a brief description and a profile picture.</Text>

          <MultiStep size={4} currentStep={4} />

          <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
            <label>
              <Text>Picture</Text>
              <Avatar
                src={session.data?.user.avatar_url}
                referrerPolicy="no-referrer"
                alt={session.data?.user.name}
              />
            </label>

            <label>
              <Text size="sm"> About you </Text>
              <TextArea {...register('bio')} />
              <FormAnnotation size="sm">
                Tell us a bit about yourself. This will be displayed on your
                personal page.
              </FormAnnotation>
            </label>

            <Button type="submit" disabled={isSubmitting}>
              Finish
              <ArrowRight />
            </Button>
          </ProfileBox>
        </Header>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
