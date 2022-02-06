<template>
  <p class="header">Todo List</p>

  <div class="inputbox">
    <input
      class="input base"
      type="text"
      :placeholder="inputPlaceholder"
      @keypress.enter="createCard"
      :value="inputValue"
    />
    <button @click="createCard">Add card</button>
    <ul class="list">
      <li
        class="list-item base"
        v-for="(value, index) in dataList"
        :key="value"
      >
        {{ index + 1 }} {{ reverseText(value) }}

        <img src="../assets/logo.png" alt="logo" @click="deleteCard(index)" width="20" height="20" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      dataList: [],
      inputPlaceholder: "Add card in list...",
      inputValue: "",
    };
  },
  methods: {
    createCard(event) {
      this.inputValue = event.target.value;
      if (this.inputValue === "") return;
      this.dataList.push(this.inputValue); 
      this.inputValue = '';
    },

    deleteCard(index) {
      this.dataList.splice(index, 1)
    },

    reverseText(item) {
        return item.split('').reverse().join('')
    },
  },
};
</script>

<style lang="scss">
.base {
  padding: 5px;
  border-radius: 5px;
}
.header {
  margin-bottom: 10px;
  font-size: 24px;
  font-family: serif;
}

.inputbox {
  margin-bottom: 20px;
}

.input {
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 5px;
}

.list {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  list-style-type: none;
  margin: 0 auto;
  max-width: 350px;
}

.list-item {
  position: relative;
  text-align: left;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.438) 2px 2px;

  img {
    
    position: absolute;
    right: 10px;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
}

.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  column-gap: 10px;

  .btn {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;

    &:first-child {
      background-color: green;
    }

    &:last-child {
      background-color: red;
    }
  }
}
</style>
