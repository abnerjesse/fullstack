<template>
  <div class="alert-app" :class="[{ error: error }, { info: info }, { success: success }]" v-show="alertShow">
    <p>{{ alertMessage }}</p>
    <button type="button" @click="close">Fechar</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useAlertStore } from '../stores/alertStore'

export default {
  computed: {
    ...mapState(useAlertStore, ['alertMessage', 'error', 'info', 'success', 'alertShow'])
  },
  methods: {
    ...mapActions(useAlertStore, ['close'])
  }
}
</script>