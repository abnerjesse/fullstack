<template>
    <h1 class="text-center title">login</h1>

    <form class="form-login">
        <input type="email" v-model="user.email" placeholder="Digite seu email">
        <input type="password" v-model="user.senha" placeholder="Digite sua senha">
        <button @click="doLogin" type="button">entrar</button>
        <button @click="formProfile" class="mt-5" type="button">criar conta</button>
    </form>
</template>

<script>
import { mapActions } from 'pinia' //importação do mapState
import { useProfileStore } from '../stores/profileStore' //importação do store
import { useAlertStore } from '../stores/alertStore'

export default {
    data: () => ({
        user: {}
    }),
    methods: {
        ...mapActions(useProfileStore, ['login']),
        ...mapActions(useAlertStore, ['showError']),
        async doLogin() {
            try {
                await this.login(this.user)
                this.$router.push('/home')
            } catch (error) {
                this.showError(error.body.message)
            }
        },
        formProfile() {
            this.$router.push('/newprofile')
        },
    },
}
</script>