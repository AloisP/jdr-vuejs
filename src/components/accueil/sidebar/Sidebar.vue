<template>
    <aside class="main-sidebar">
        <section class="sidebar" style="height: auto">
            <UserPanel />
            <Menu />
        </section>
    </aside>
</template>

<script>
import UserPanel from './UserPanel'
import Menu from './Menu'

export default {
  name: 'Sidebar',
  components: {
      UserPanel, Menu
  }
}
</script>