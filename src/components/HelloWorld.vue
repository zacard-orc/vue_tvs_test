<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
    <div>
      <button class="yes" @click="callYes">Yes</button>
      <button class="no" @click="callNo">No</button>
    </div>
    <div>
      <input type="text" @keydown.prevent="onKeydown" v-model="quantity" />
    </div>
    <div>
      <router-link to="/boom">About</router-link>
    </div>
  </div>
</template>

<script>
const KEY_DOWN = 40;
const KEY_UP = 38;
const ESCAPE = 27;

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'ff',
      count: 0,
      quantity: 45,
    };
  },
  props: {
    callMe: {
      type: Function,
    },
  },
  watch: {
    quantity(newValue) {
      this.$emit('input', newValue);
    },
  },
  mounted() {
    setTimeout(() => {
      this.msg = 'Welcome lly';
    }, 500);
  },
  methods: {
    increment() {
      this.count += 1;
      this.$emit('change', this.count);
    },
    callYes() {
      this.callMe('yes');
    },
    callNo() {
      this.callMe('no');
    },
    // another
    incrementX() {
      this.quantity += 1;
    },
    decrementX() {
      this.quantity -= 1;
    },
    clear() {
      this.quantity = 0;
    },
    onKeydown(e) {
      if (e.keyCode === ESCAPE) {
        this.clear();
      }
      if (e.keyCode === KEY_DOWN) {
        this.decrementX();
      }
      if (e.keyCode === KEY_UP) {
        this.incrementX();
      }
      if (e.key === 'a') {
        this.quantity = 13;
      }
    },
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
