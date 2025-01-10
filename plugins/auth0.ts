import { createAuth0 } from "@auth0/auth0-vue";

export default defineNuxtPlugin((nuxtApp) => {
    const secrets = useRuntimeConfig()

    const auth0 = createAuth0({
      domain: secrets.public.AUTH0_DOMAIN!,
      clientId: secrets.public.AUTH0_CLIENT_ID!,
      authorizationParams: {
        redirect_uri: secrets.public.AUTH0_REDIRECT_URI!,
      },
    });

    if (import.meta.client) {
        nuxtApp.vueApp.use(auth0)
    }

    addRouteMiddleware('auth', () => {
        if (import.meta.client) {
            auth0.checkSession()
            if (!auth0.isAuthenticated.value) {
                auth0.loginWithRedirect({
                    appState: {
                        target: useRoute().path
                    }
                })
        }
    }})
})