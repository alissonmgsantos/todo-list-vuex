<template>
  <div id="app">
    <h1 class="title">Lista de tarefas</h1>
    <main class="container-main">
      <create-task />
      <list-task />
    </main>
  </div>
</template>

<script>
import CreateTask from './components/CreateTask.vue';
import ListTask from './components/ListTask.vue';

export default {
  name: 'App',
  components: {
    CreateTask,
    ListTask,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-size: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5rem;
  height: calc(100vh - 5rem);
  background: #2b2b36;
  color: #fff;
}
.title {
  font-size: 3rem;
  font-weight: 600;
}
.container-main {
  display: grid;
  grid-template-columns: 0.3fr;
  justify-content: center;
  align-content: center;
  margin: 2rem;
  gap: 1rem;
}
</style>
