<template>
  <h1>Meu Perfil</h1>
  <h2>Informações Pessoais</h2>
  <section>
    <form>
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="profile.nome" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          v-model="profile.usuario.email"
          disabled
        />
      </div>
      <div>
        <label for="dataNascimento">Data de Nascimento:</label>
        <input
          type="date"
          id="dataNascimento"
          v-model="profile.dataNascimento"
          disabled
        />
      </div>
      <div>
        <label for="disponibilidadeMudanca">Disponibilidade de mudança</label>
        <input
          type="checkbox"
          id="disponibilidadeMudanca"
          v-model="profile.disponibilidadeMudanca"
        />
      </div>
      <div>
        <label for="disponibilidadeHorario">Disponibilidade de horário</label>
        <select
          v-model="profile.disponibilidadeHorario"
          id="disponibilidadeHorario"
        >
          <option value="Meio Período">Meio Período</option>
          <option value="Integral">Integral</option>
        </select>
      </div>
      <fieldset>
        <legend>Educação</legend>
        <form-education-app :profile="profile"></form-education-app>
        <section>
          <table-education-app
            :educacao="profile.educacao"
          ></table-education-app>
        </section>
      </fieldset>
    </form>
  </section>
  <div>
    <button @click="saveProfile">Salvar Alterações</button>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useProfileStore } from "../stores/profileStore";
import FormEducationApp from "../components/FormEducationApp.vue";
import TableEducationApp from "../components/TableEducationApp.vue";

export default {
  components: {
    FormEducationApp,
    TableEducationApp,
  },
  data: () => ({
    profile: {
      usuario: {},
    },
  }),
  computed: {
    ...mapState(useProfileStore, ["userLogged"]),
  },
  methods: {
    ...mapActions(useProfileStore, ["getProfileById", "updateProfile"]),
    async saveProfile() {
      await this.updateProfile(this.profile);
    },
  },
  async mounted() {
    this.profile = await this.getProfileById();
  },
};
</script>
