<template>
    <h1 class="text-center title">Nova Conta</h1>

    <form class="form-login">
        <label for="nome">Nome</label>
        <input id="nome" type="text" v-model="profile.nome" placeholder="Digite seu nome">

        <label for="dataNascimento">Data de Nascimento</label>
        <input id="dataNascimento" type="date" v-model="profile.dataNascimento">

        <div class="flex full-width items-center mb-5">
            <input class="mr-2" id="disponibilidadeMudanca" type="checkbox" v-model="profile.disponibilidadeMudanca">
            <label for="disponibilidadeMudanca">Disponibilidade de Mudança</label>
        </div>

        <label for="disponibilidadeHorario">Disponibilidade de Horário</label>
        <select id="disponibilidadeHorario" v-model="profile.disponibilidadeHorario">
            <option value="Integral">Integral</option>
            <option value="Meio Período">Meio Período</option>
        </select>

        <label for="email">E-mail</label>
        <input id="email" type="email" v-model="profile.usuario.email" placeholder="Digite seu email">

        <label for="senha">Senha</label>
        <input id="senha" type="password" v-model="profile.usuario.senha" placeholder="Digite sua senha">

        <button @click="doCreateProfile" class="mt-5" type="button">cadastrar</button>
        <button @click="back" class="mt-5" type="button">Voltar</button>
    </form>
</template>

<script>
import { mapActions } from 'pinia'
import { useProfileStore } from '../stores/profileStore'
import { useAlertStore } from '../stores/alertStore'

export default {
    data: () => ({
        profile: { usuario: {} }
    }),
    methods: {
        ...mapActions(useProfileStore, ['createProfile']),
        ...mapActions(useAlertStore, ['showError', 'showSuccess']),
        async doCreateProfile() {
            try {
                await this.createProfile(this.profile)
                this.showSuccess('Perfil cadastrado com sucesso!')
                this.$router.push({ name: 'login' })
            } catch (error) {
                this.showError(error.body.message)
            }
        },
        back() {
            this.$router.push({ name: 'login' })
        }
    }
}
</script>