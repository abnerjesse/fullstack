<template>
    <table>
        <thead>
            <tr>
                <th>Email</th>
                <th>Disponibilidade de Mudança</th>
                <th>Disponibilidade de Horário</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="profile in lastsProfiles">
                <td>{{ profile.nome }}</td>
                <td>{{ profile.disponibilidadeMudanca ? "Sim" : "Não" }}</td>
                <td>{{ profile.disponibilidadeHorario }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { mapState } from 'pinia';
import { useProfileStore } from '../stores/profileStore';

export default {
    computed: {
        ...mapState(useProfileStore, ['lastsProfiles'])
    }
}
</script>