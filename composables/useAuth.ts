import { useAuth0 } from "@auth0/auth0-vue";
import { computed } from "vue";

export function useAuth() {
    const auth0 = import.meta.client ? useAuth0() : undefined;

    const isAuthenticated = computed(() => {
        return auth0?.isAuthenticated.value;
    });

    const login = () => {
        auth0?.checkSession();
        if (!auth0?.isAuthenticated.value) {
            auth0?.loginWithRedirect({
                appState: { targetUrl: useRoute().path },
            });
        }
    };

    const logout = () => {
        navigateTo("/");
        auth0?.logout();
    };

    return {
        isAuthenticated,
        login,
        logout,
    };
}
