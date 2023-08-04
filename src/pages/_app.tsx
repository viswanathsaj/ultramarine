import { type AppType } from 'next/app'
import { api } from '~/utils/api'
import '~/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Provider } from 'jotai'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Provider>
        <Component {...pageProps} />;
      </Provider>
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
