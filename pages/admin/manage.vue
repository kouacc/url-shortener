<script setup lang="ts">
const { logout, user } = useAuth()

</script>

<template>
    <div class="container h-screen pt-20 space-y-5">
        <div class="rounded-lg p-6 bg-zinc-900 flex flex-col items-center justify-center gap-5 max-w-screen-lg mx-auto">
            <section class="flex justify-between w-full">
                <h1>Bienvenue, {{ user?.name }}</h1>
                <button @click="logout()" aria-label="Se déconnecter"><LucideLogOut /></button>
            </section>
        </div>
        <div class="rounded-lg p-6 bg-zinc-900 flex flex-col items-center justify-center gap-5 max-w-screen-lg mx-auto">
            <section class="w-full">
                <h2>Ajouter un lien</h2>
            </section>
        </div>
    </div>
</template>