<template>
    <aside class="sidebar bg-dark text-white">
        <UserPanel v-bind:utilisateur="utilisateur"/>
    </aside>
</template>

<script>
import UserPanel from './UserPanel'

export default {
  name: 'Sidebar',
  props : ["utilisateur"],
  components: {
      UserPanel
  }
}
</script>

<style>
.sidebar {
    position: absolute;
    top: 0;
    left: 0;
    padding: 70px 15px;
    min-height: 100%;
    width: 230px;
    z-index: 810;
}

</style>
