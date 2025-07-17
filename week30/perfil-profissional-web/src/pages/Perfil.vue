<template>
    <h1>Meu Perfil</h1>
    <h2>Informações Pessoais</h2>
    <section>
        <form>
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="profile.nome">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="text" id="email" v-model="profile.usuario.email" disabled>
            </div>
            <div>
                <label for="dataNascimento">Data de Nascimento:</label>
                <input type="date" id="dataNascimento" v-model="profile.dataNascimento" disabled>
            </div>
            <div>
                <label for="disponibilidadeMudanca">Disponibilidade de mudança</label>
                <input type="checkbox" id="disponibilidadeMudanca" v-model="profile.disponibilidadeMudanca">
            </div>
            <div>
                <label for="disponibilidadeHorario">Disponibilidade de
                    horário</label>
                <select v-model="profile.disponibilidadeHorario" id="disponibilidadeHorario">
                    <option value="Meio Período">Meio Período</option>
                    <option value="Integral">Integral</option>
                </select>
            </div>
            <fieldset>
                <legend>Educação</legend>
                <button v-show="!showFormEducation" @click="showFormEducation = true" type="button">Novo</button>
                <div v-show="showFormEducation">
                    <label for="instituicao">Instituição:</label>
                    <input v-model="educacao.instituicao" id="instituicao" type="text" placeholder="Instituição">

                    <label for="ingresso">Data de Ingresso:</label>
                    <input v-model="educacao.ingresso" id="ingresso" type="date" placeholder="Data de Ingresso">

                    <label for="conclusao">Data de Conclusão:</label>
                    <input v-model="educacao.conclusao" id="conclusao" type="date" placeholder="Data de Conclusão">

                    <label for="nivelEscolaridade">Nível de Escolaridade</label>
                    <select v-model="educacao.nivelEscolaridade" id="nivelEscolaridade">
                        <option value="Ensino Fundamental">Ensino Fundamental</option>
                        <option value="Ensino Médio">Ensino Médio</option>
                        <option value="Ensino Superior">Ensino Superior</option>
                        <option value="Pós-gradução">Pós-graduação</option>
                        <option value="Mestrado">Mestrado</option>
                        <option value="Doutorado">Doutorado</option>
                    </select>
                    <button @click="addEducation" type="button">Adicionar</button>
                    <button @click="showFormEducation = false" type="button">Cancelar</button>
                </div>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Instituição</th>
                                <th>Nível de Escolaridade</th>
                                <th>Ingresso</th>
                                <th>Conclusão</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="education in profile.educacao">
                                <td>{{ education.instituicao }}</td>
                                <td>{{ education.nivelEscolaridade }}</td>
                                <td>{{ education.ingresso }}</td>
                                <td>{{ education.conclusao }}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </fieldset>
        </form>
    </section>
    <div>
        <button @click="saveProfile">Salvar Alterações</button>
    </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useProfileStore } from '../stores/profileStore';

export default {
    data: () => ({
        profile: {
            usuario: {},
        },
        educacao: {},
        showFormEducation: false
    }),
    computed: {
        ...mapState(useProfileStore, ['userLogged'])
    },
    methods: {
        ...mapActions(useProfileStore, ['getProfileById', 'updateProfile']),
        async saveProfile() {
            await this.updateProfile(this.profile)
        },
        addEducation() {
            this.profile.educacao.push(this.educacao)
            this.educacao = {}
            this.showFormEducation = false
        }
    },
    async mounted() {
        this.profile = await this.getProfileById()
    }
}
</script>