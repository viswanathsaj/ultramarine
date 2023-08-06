import Head from 'next/head'
import Sidebar from '~/components/Sidebar/Sidebar'
import { SignOutButton } from '@clerk/nextjs'
import { api } from '~/utils/api'
import Download from '~/components/Documents/Download'

export default function Dashboard() {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  const user = api.example.getUser.useQuery()

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Sidebar />

      <div className={`ml-56 text-xl`}>
        <h1>{user.data?.primaryEmailAddressId}</h1>
        <Download />

        <SignOutButton>Sign Out</SignOutButton>
      </div>
    </>
  )
}