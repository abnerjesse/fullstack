<template>
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
      <tr v-for="education in educacao" :key="education.ingresso">
        <td>{{ education.instituicao }}</td>
        <td>{{ education.nivelEscolaridade }}</td>
        <td>{{ education.ingresso }}</td>
        <td>{{ education.conclusao }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    educacao: {
      type: Array,
      required: true,
    },
  },
};
</script>
