<template >
    <div class="container">
        <div class="row">
            <div class="col-6 text-white" v-for="(project, index) in projects">
                <div class="card">
                    <div class="card-header">
                        <img class="img-fluid"
                            src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg"
                            alt="Image project">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text">Type : {{ project.type.name }}</p>
                        <p class="card-text">Status : {{ project.status.name }}</p>
                        <div class="tech d-flex gap-2">
                            <p class="card-text">Technology :</p>
                            <p v-for="technology in project.technologies" class="card-text">{{ technology.name }}
                            </p>
                        </div>
                        <router-link :to="{ name: 'showProject', params: { title: project.title } }">
                            <button class="btn btn-primary">View</button>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Projectspage',
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            projects: [],
        }
    },
    methods: {
        getProjects() {
            axios.get(this.apiUrl).then((response) => {
                if (response.data.success) {
                    this.projects = response.data.result.data;
                } else {
                    // redirect alla pagina 404
                    this.$router.push({ name: 'not-found' })
                }
            });
        }
    },
    created() {
        this.getProjects()
    }
}
</script>
<style lang="scss">
div.col-6 {
    padding: 1rem 6rem;
}
</style>