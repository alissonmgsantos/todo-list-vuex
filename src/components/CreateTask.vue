<template>
  <form
    class="container-form"
    v-on:submit.prevent="
      store(model);
      model.description = null;
    "
  >
    <input
      type="text"
      v-model="model.description"
      placeholder="Insira uma nova tarefa"
    />
    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      model: {
        description: null,
      },
    };
  },

  methods: {
    ...mapActions('todoList', {
      store: 'store',
    }),
  },
};
</script>

<style lang="scss" scoped>
.container-form {
  display: grid;
  grid-template-columns: 1fr 1fr;

  input {
    height: 3.1rem;
    width: 20rem;
    text-align: center;
    border-radius: 1rem 0 0 1rem;
    border: none;
    outline: none;
  }

  button {
    padding: 1rem;
    border-radius: 0 1rem 1rem 0;
    border: none;
    cursor: pointer;
    background: #eae328;

    &:hover {
      opacity: 80%;
    }
  }
}
</style>
