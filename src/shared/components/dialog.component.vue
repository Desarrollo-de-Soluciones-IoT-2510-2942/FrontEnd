<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <transition name="fade">
    <div v-if="modelValue" class="overlay" @click.self="close">
      <div class="dialog">
        <button class="close-btn" @click="close">×</button>
        <div class="dialog-content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.dialog {
  position: relative;
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 3rem 1rem 1rem 1rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #555;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
}

</style>
