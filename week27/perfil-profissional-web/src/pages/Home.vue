<template>
    <h1>Home</h1>
    <h2>Olá, {{ userLogged.nome }}!</h2>

    <section>
        <h3>Últimas notificações</h3>
        <list-notifications-app></list-notifications-app>
    </section>
    <section>
        <h3>Últimos perfis cadastrados</h3>
        <list-profiles-app></list-profiles-app>
    </section>

</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useProfileStore } from '../stores/profileStore'
import { useNotificationStore } from '../stores/notificationStore'
import ListProfilesApp from '../components/ListProfilesApp.vue'
import ListNotificationsApp from '../components/ListNotificationsApp.vue'

export default {
    components: {
        ListProfilesApp,
        ListNotificationsApp
    },
    computed: {
        ...mapState(useProfileStore, ['userLogged']),
        ...mapState(useNotificationStore, ['notifications'])
    },
    methods: {
        ...mapActions(useProfileStore, ['getProfiles']),
        ...mapActions(useNotificationStore, ['getProfileNotification'])
    },
    mounted() {
        this.getProfiles(),
            this.getProfileNotification(this.userLogged.id)
    }
}
</script>