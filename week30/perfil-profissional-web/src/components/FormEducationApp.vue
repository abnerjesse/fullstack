<template>
  <button
    v-show="!showFormEducation"
    @click="showFormEducation = true"
    type="button"
  >
    Novo
  </button>
  <div v-show="showFormEducation">
    <label for="instituicao">Instituição:</label>
    <input
      v-model="educacao.instituicao"
      id="instituicao"
      type="text"
      placeholder="Instituição"
    />

    <label for="ingresso">Data de Ingresso:</label>
    <input
      v-model="educacao.ingresso"
      id="ingresso"
      type="date"
      placeholder="Data de Ingresso"
    />

    <label for="conclusao">Data de Conclusão:</label>
    <input
      v-model="educacao.conclusao"
      id="conclusao"
      type="date"
      placeholder="Data de Conclusão"
    />

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
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    educacao: {},
    showFormEducation: false,
  }),
  methods: {
    addEducation() {
      this.profile.educacao.push(this.educacao);
      this.educacao = {};
      this.showFormEducation = false;
    },
  },
};
</script>
