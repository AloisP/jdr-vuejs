<template>
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
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar {
    z-index: 999;
}
.brand{
    transition: width .3s ease-in-out;
    display: block;
    float: left;
    font-size: 20px;
    text-align: center;
    width: 230px;
    overflow: hidden;
}
</style>