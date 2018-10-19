<template>
    <aside class="main-sidebar">
        <section class="sidebar" style="height: auto">
            <UserPanel v-bind:utilisateur="utilisateur"/>
            <Menu />
        </section>
    </aside>
</template>

<script>
import UserPanel from './UserPanel'
import Menu from './Menu'

export default {
  name: 'Sidebar',
  props : ["utilisateur"],
  components: {
      UserPanel, Menu
  }
}
</script>