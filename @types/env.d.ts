declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DOMAIN: string
        NEXT_PUBLIC_FORM_URL: string
      }
    }
}

export {}