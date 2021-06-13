<template>
  <div class="container-list-task">
    <template v-if="datasource.length > 0">
      <template v-for="(task, key) in datasource">
        <div :key="key" class="list">
          <p :class="{ 'task-done': task.done }">
            {{ task.description }}
          </p>
          <div class="actions" v-if="!task.done">
            <span class="btn-remove" @click="remove(task.id)" />
            <span class="btn-done" @click="done(task.id)" />
          </div>
        </div>
      </template>
    </template>
    <template v-else>
      <p align="center">Nenhuma tarefa encontrada.</p>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters('todoList', {
      datasource: 'datasource',
    }),
  },
  methods: {
    ...mapActions('todoList', {
      remove: 'remove',
      done: 'done',
    }),
  },
};
</script>

<style lang="scss" scoped>
.container-list-task {
  background: #1d1d27;
  padding: 2rem;
  border-radius: 1rem;

  .list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .task-done {
      opacity: 50%;
      text-decoration: line-through;
    }
  }

  .actions {
    cursor: pointer;
    border-radius: 100%;
    font-size: 1.2rem;

    .btn-remove::before {
      padding: 0.5rem;
      content: '𐄂';
      color: #ff0000;
    }

    .btn-done::before {
      padding: 0.5rem;
      content: '✓';
      color: #0eff0e;
    }
  }
}
</style>
