<template>
    <div class="counter">
    <button class="btn" @click=" count <= 0 ? count  : count--"> Minus </button>
    {{count}}
    <button class="btn" @click=" (count >= 10) ? count : count++"> Plus </button>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            
        }
    }
}
</script>

<style lang="scss">
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
      background-color: red;
    }

    &:last-child {
      background-color: green;
    }
  }
}
</style>