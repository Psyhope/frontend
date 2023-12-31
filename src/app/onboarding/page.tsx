'use client'

import { OnBoardingModule } from '@modules'
import withAuthOnboarding from '@/components/hoc/withAuthOnboarding'

const OnBoarding = () => {
  return (
    <>
      <head>
        <title>Profile | Empower U&I</title>
      </head>
      <main className="min-h-screen md:pt-5">
        <OnBoardingModule></OnBoardingModule>
      </main>
    </>
  )
}

export default withAuthOnboarding(OnBoarding)
