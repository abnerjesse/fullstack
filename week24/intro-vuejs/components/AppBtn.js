export default {
    // props: ["text"],
    props: {
        text: {
            type: String,
            required: true,
            default: "no_text",
        },
    },
    data: function () {
        return {
            // title: "Olá",
        };
    },
    methods: {
        btnClicked() {
            this.$emit("clicked", `Botão ${this.text} clicado!`);
        },
    },
    template: `
    <button style="backgroud-color: #2c3e50; color: black; font-family: Arial, Helvetica, sans-serif; border: 1px solid black; padding: 10px; border-radius: 5px;" @click="btnClicked">{{ text }}</button>
    `
};