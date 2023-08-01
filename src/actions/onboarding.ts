import { gql } from '@/__generated__'

export const MUTATION_ONBOARDING = gql(`
    mutation CreateOnboarding($createOnboardingInput: CreateOnboardingInput!) {
        createOnboarding(createOnboardingInput: $createOnboardingInput) {
            id
        }
    }
`)
