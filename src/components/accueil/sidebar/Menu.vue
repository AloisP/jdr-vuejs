<template>
    <ul class="sidebar-menu tree">
        <li class="header"><i class="fa fa-home"></i> Menu</li>
        <li>
            <a href="#">
                <i class="fa fa-gamepad"></i> <span>Nouvelle partie</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-users"></i> <span>Contact</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-info-circle"></i> <span>Mes informations</span>
            </a>
        </li>
        <li>
            <a href="/">
                <i class="fa fa-power-off"></i> <span>Déconnexion</span>
            </a>
        </li>
    </ul>
</template>

<script> 
export default {
    name : "Menu"
}
</script>