<script setup>
import Sidebar from "./shared/components/sidebar.component.vue"
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div id="app">
    <!-- Mostrar sidebar + toolbar solo si NO estamos en /login ni en /register -->
    <Sidebar v-if="route.path !== '/login' && route.path !== '/register'" />

    <div
        v-if="route.path !== '/login' && route.path !== '/register'"
        class="main"
    >
      <div class="toolbar">
        <input type="text" class="search-input" placeholder="Buscar en Nutricontrol..." />
        <div class="toolbar-icons">
          <button class="icon-btn">
            <img
                src="/topbar/alerts-icon.png"
                width="35"
                height="35"
                alt="Alerts"
            />
          </button>
          <router-link to="/profile" class="icon-btn">
            <img
                src="/topbar/profile-icon.png"
                width="35"
                height="35"
                alt="Profile"
            />
          </router-link>
        </div>
      </div>
      <main class="content">
        <router-view />
      </main>
    </div>

    <!-- Para /login y /register solo renderizamos la vista -->
    <router-view v-if="route.path === '/login' || route.path === '/register'" />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  height: 100vh;
}
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.search-input {
  width: 600px;
  max-width: 100%;
  height: 50px;
  padding: 0 15px;
  font-size: 16px;
  box-sizing: border-box;
  color: #014728;
  border: 1px solid #014728;
  border-radius: 10px;
}
.search-input::placeholder {
  color: #012315;
  opacity: 0.7;
}
input:focus {
  outline: none;
}

.toolbar-icons {
  display: flex;
  align-items: center;
  gap: 15px;
}
.icon-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.content {
  flex: 1;
  overflow-y: auto;
}

@media (max-width: 600px) {
  #app {
    flex-direction: column;
  }
  .toolbar {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .search-input {
    width: 100%;
  }
  .toolbar-icons {
    justify-content: flex-end;
  }
}
</style>
