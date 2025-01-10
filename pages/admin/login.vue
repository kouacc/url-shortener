<script setup lang="ts">
const { login, isAuthenticated, user } = useAuth()

if (isAuthenticated.value) {
    navigateTo('/admin/manage')
}
</script>

<template>
    <div class="container grid place-items-center h-screen">
        <div class="rounded-lg p-16 bg-zinc-900 flex flex-col items-center justify-center gap-5 relative z-50">
            <h1>Connexion</h1>
            <button class="rounded-md px-3 py-2 bg-indigo-600" @click="login()">Se connecter avec Auth0</button>
        </div>
    <div class="paper-grid absolute top-0 left-0"></div>
    </div>
</template>