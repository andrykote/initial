<template>
  <div>
    <Todo />
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: "App",
  components: {
    Todo,
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

.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
  background-color: rgb(196, 194, 189);

  .children {
    width: 500px;
    height: 100px;

    &1 {
      background-color: red;
    }
    &2 {
      background-color: darkgrey;
    }
    &3 {
      background-color: darkblue;
    }
  }
}
</style>>

