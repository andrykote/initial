<template>
  <div>
    <Todo />
    <counter/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
import Counter from './components/Counter.vue'

export default {
  name: "App",
  components: {
    Todo,
    Counter,
    
  },
  data() {
    return {
      name: "Vasa",
    };
  },
};
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.root {
  font-size: 15px;
  font-family: monospace;
}

#app {
  text-align: center;
  color: #263646;
  margin-top: 15px;
}

.text {
  font-size: 14px;
  color: rgb(255, 0, 0);
  margin-bottom: 12px;
}

</style>>

