<template>
<<<<<<< HEAD
    <header class="main-header">
        <a href="./accueil" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>J</b>DR</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Jeu</b> de rôle</span>
        </a>
        <nav class="navbar navbar-static-top">
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="/" data-toggle="control-sidebar"><i class="fa fa-power-off"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
=======
    <div>
        <b-navbar toggleable="md" type="dark" variant="info" class="navbar">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="brand " href="#">JDR</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/">
                        <font-awesome-icon icon="power-off" />
                    </b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>

    </div>

>>>>>>> 55a798262564e0b223915cf3d9be4a851a2665a8
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
