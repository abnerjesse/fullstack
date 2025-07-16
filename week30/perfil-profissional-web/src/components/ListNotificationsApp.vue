<template>
    <table>
        <thead>
            <th>Tipo</th>
            <th>Título</th>
            <th>Lida</th>
        </thead>
        <tbody>
            <tr v-for="notification in notifications">
                <td>{{ notification.tipo }}</td>
                <td>{{ notification.titulo }}</td>
                <td>{{ notification.lida ? "Sim" : "Não" }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { mapState } from 'pinia';
import { useNotificationStore } from '../stores/notificationStore';

export default {
    computed: {
        ...mapState(useNotificationStore, ['notifications'])
    }
}
</script>