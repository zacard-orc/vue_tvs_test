<template>
  <div class="helloboom">
    <h1>{{ msgboom }}</h1>
    <router-link to="/home">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Boom',
  data() {
    return {
      msgboom: 'boom',

    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
