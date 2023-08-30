<template></template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      apiUrl: 'http://127.0.0.1:8000/api/projects',
    }
  },

  methods: {
    getProjects() {
      axios.get(this.apiUrl)
        .then((response) => {
          console.log(response.data.result.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getProjects();
  }
}
</script>
<style lang="scss" scoped></style>
