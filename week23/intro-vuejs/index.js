import AppBtn from "./components/AppBtn.js";
const { createApp } = Vue;

createApp({
    components: {
        AppBtn,
    },
    data() {
        return {
            title: "Introdução ao VueJS",
            passwd: "",
            typePasswd: "password",
            button: "Mostrar senha",
            nomeCliente: "",
            idadeCliente: "",
            clientes: [
                { nome: "João", idade: 20 },
                { nome: "Maria", idade: 25 },
                { nome: "José", idade: 30 },
            ]
        };
    },
    methods: {
        updateTitle() {
            this.title = document.getElementById("inputTitle").value;
        },
        showPasswd() {
            if (this.typePasswd == "password") {
                this.typePasswd = "text";
                this.button = "Esconder senha";
            } else {
                this.typePasswd = "password";
                this.button = "Mostrar senha";
            }
        },
        addClient() {
            this.clientes.push({
                nome: this.nomeCliente,
                idade: this.idadeCliente,
            });
            this.nomeCliente = "";
            this.idadeCliente = "";
        },
        removeClient(i) {
            this.clientes.splice(i, 1);
        },
    },
}).mount("#app");