<template>
    <nav class="navbar-guests">
        <div class="container d-flex align-items-center justify-content-between">
            <router-link class="navbar-brand guest" :to="{ name: 'Homepage' }">Mario
                Santoro</router-link>
            <ul class="d-flex list-unstyled m-0">
                <li v-for="link in links">
                    <router-link class="link" :to="{ name: link.name }">{{ link.link }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {
                    'name': 'Homepage',
                    'link': 'Home'
                },
                {
                    'name': 'AboutUs',
                    'link': 'About'
                },
                {
                    'name': 'Projects',
                    'link': 'Projects'
                },
                {
                    'name': 'Register',
                    'link': 'Register'
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
nav.navbar-guests {
    background-color: transparent;
    padding: 8px 0;
    z-index: 5;
    width: 100%;

    a.guest {
        font-size: 1.125rem;
        text-decoration: none;
        color: white;
        margin-left: 0;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
    }

    a.link {
        font-size: 1rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        margin-left: 4rem;
        transition: all 0.4s;
        font-weight: 700;
    }
}
</style>
