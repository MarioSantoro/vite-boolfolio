<template >
    <div class="card">
        <div class="card-header">
            <img class="img-fluid"
                src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                alt="Image project">
        </div>
        <div class="card-body">
            <h4 class="card-title">{{ this.project.title }}</h4>
            <p class="card-text">Type : {{ this.project.type.name }}</p>
            <p class="card-text">Status : {{ this.project.status.name }}</p>
            <div class="tech d-flex gap-2">
                <p class="card-text">Technology :</p>
                <p v-for="technology in this.project.technologies" class="card-text">{{ technology.name }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'ShowProjectpage',
    data() {
        return {
            project: [],
            apiUrl: 'http://127.0.0.1:8000/api/show/'
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.apiUrl}${this.$route.params.id}`).then((response) => {
                if (response.data.success) {
                    this.project = response.data.result;
                    console.log(this.project.type.name)
                } else {
                    // redirect alla pagina 404
                    this.$router.push({ name: 'not-found' })
                }
            });
        }
    },
    created() {
        this.getProject()
    }
}
</script>
<style lang="scss"></style>