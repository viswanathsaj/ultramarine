import { type AppType } from 'next/app'
import { api } from '~/utils/api'
import '~/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Provider } from 'jotai'
import { Poppins } from 'next/font/google'
import RootLayout from '~/components/RootLayout'

const poppins = Poppins({
  weight: ['200', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        elements: {
          footer: 'hidden'
        }
      }}
    >
      <RootLayout>
        <Provider>
          <main className={poppins.variable}>
            <Component {...pageProps} />
          </main>
        </Provider>
      </RootLayout>
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
