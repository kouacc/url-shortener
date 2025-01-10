<script setup lang="ts">
const { login, isAuthenticated } = useAuth()

if (isAuthenticated.value) {
    navigateTo('/admin/manage')
}
</script>

<template>
    <div>
        <h1>Connexion</h1>
        <button v-if="!isAuthenticated" @click="login()">Se connecter avec Auth0</button>
    </div>
</template>