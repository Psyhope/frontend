import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  documents: ['src/**/*.ts?(x)'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  // ignoreNoDocuments: true,
}

export default config
