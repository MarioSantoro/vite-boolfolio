<template >
    <div v-if="this.project" class="background-image">
        <img v-if="project.image.startsWith('http')" :src="project.image" alt="Image project">
        <img v-else :src="'http://127.0.0.1:8000/storage/' + project.image" alt="Image project">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="card">
                    <div class="card-header" v-if="this.project">
                        <img v-if="project.image.startsWith('http')" :src="project.image" class="img-fluid"
                            alt="Image project">
                        <img v-else :src="'http://127.0.0.1:8000/storage/' + project.image" class="img-fluid"
                            alt="Image project">
                    </div>
                    <div class="card-body" v-if="this.project">
                        <h4 class="card-title">{{ this.project.title }}</h4>
                        <p class="card-text">Type : {{ this.project.type.name }}</p>
                        <p class="card-text">Status : {{ this.project.status.name }}</p>
                        <div class="tech d-flex gap-2 align-items-center">
                            <p class="card-text">Technology :</p>
                            <img :src="technology.image" alt="" v-for="technology in  this.project.technologies"
                                class="tech">
                        </div>
                    </div>
                </div>
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
            project: false,
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
<style lang="scss">
div.background-image {
    height: 100vh;
    width: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    bottom: 0;
    z-index: -5;

    img {
        width: 100%;
        height: 100%;
    }
}

div.card {
    width: 400px;
    margin-top: 10rem;
}

img.tech {
    width: 30px;
    height: 30px;
    object-fit: contain;
    aspect-ratio: 16/9;
}
</style>