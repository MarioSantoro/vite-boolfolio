<template>
    <nav class="navbar-guests">
        <ul class="d-flex justify-content-center list-unstyled gap-3">
            <li v-for="link in links">
                <router-link :to="{ name: link.name }">{{ link.link }}</router-link>
            </li>
        </ul>
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

    a {
        font-size: 1.125rem;
        text-decoration: none;
        color: white;
        margin-left: 0;
        cursor: pointer;
    }
}
</style>
