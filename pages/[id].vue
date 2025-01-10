<script setup lang="ts">
const route = useRoute()

const { data } = useFetch(`/api/geturl`, {
    method: "POST",
    body: { "url": "http://localhost:3000" + route.fullPath }
})

onMounted(async () => {
    window.location.href = data.value?.body!
})
</script>