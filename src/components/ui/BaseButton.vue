<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  text-transform: capitalize;
  font-size: 1rem;
  border-radius: 3px;
  letter-spacing: 0.1rem;
  outline: none;
  cursor: pointer;
  &--blue {
    background-color: #005eff;
    color: #fff;
  }
}

</style>