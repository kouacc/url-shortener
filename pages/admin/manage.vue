<script setup lang="ts">
const { logout } = useAuth()

</script>

<template>
    <div>
        <h1>Admin</h1>
        <button @click="logout()">Se déconnecter</button>
    </div>
</template>