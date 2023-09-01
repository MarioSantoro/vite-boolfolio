<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center mt-5">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title text-danger">Registrazione</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="registerUser">
                            <div class="form-group m-2">
                                <label for="name">Nome:</label>
                                <input type="text" class="form-control" id="name" v-model="formData.name" required />
                            </div>
                            <div class="form-group m-2">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" v-model="formData.email" required />
                            </div>
                            <div class="form-group m-2">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" id="password" v-model="formData.password"
                                    required />
                            </div>
                            <div class="form-group m-2">
                                <label for="confirm_password">Conferma Password:</label>
                                <input type="password" class="form-control" id="confirm_password"
                                    v-model="formData.password_confirm" required />
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary">Registrati</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            formData: {
                'name': '',
                'email': '',
                'password': '',
                'password_confirm': '',
            }
        }
    },
    methods: {
        registerUser() {
            console.log(this.formData.password, this.formData.password_confirm)
            if (this.formData.password === this.formData.password_confirm) {
                axios
                    .post("http://127.0.0.1:8000/api/register", this.formData)
                    .then((response) => {
                        // Gestisci la risposta, ad esempio reindirizza l'utente alla pagina di accesso
                        console.log("Utente registrato con successo", response);
                    })
                    .catch((error) => {
                        // Gestisci gli errori durante la registrazione
                        console.error("Errore durante la registrazione:", error.response.data);
                    });
            } else {
                console.log('error')
            }
        },
    }
}
</script>
<style lang="scss"></style>