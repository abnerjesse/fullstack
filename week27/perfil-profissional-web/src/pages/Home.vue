<template>
    <h1>Home</h1>
    <h2>Olá, {{ userLogged.email }}!</h2>
</template>

<script>
import { mapState } from 'pinia'
import { useProfileStore } from '../stores/profileStore'

export default {
    computed: {
        ...mapState(useProfileStore, ['userLogged'])
    }
}
</script>