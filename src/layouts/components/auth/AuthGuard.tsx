// ** React Imports
import { ReactNode, ReactElement, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useForge4Flow } from '@forge4flow/forge4flow-nextjs'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props
  const auth = useForge4Flow()
  const router = useRouter()

  const [checkingSession, setCheckingSession] = useState(true)

  useEffect(
    () => {
      if (!router.isReady) {
        return
      }

      const verifySession = async () => {
        try {
          const validSession = await auth.validSession()
          if (!validSession) {
            if (router.asPath !== '/') {
              router.replace({
                pathname: '/login',
                query: { returnUrl: router.asPath }
              })
            } else {
              router.replace('/login')
            }
          }

          const isAdmin = await auth.hasFeature({ featureId: 'forge4flow-admin' })
          if (!isAdmin) {
            router.replace('/401')
          }
          setCheckingSession(false)
        } catch (error) {
          console.log(error)
          router.replace('/login')
        }
      }

      verifySession()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth.sessionToken, auth.isAuthenticated, router.route]
  )

  if (auth.isLoading || auth.isAuthenticated === false || checkingSession) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard
