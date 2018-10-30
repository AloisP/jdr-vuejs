<template>
    <aside class="control-sidebar control-sidebar-light control-sidebar-open">    
        <Chat />
        <De />
    </aside>
</template>

<script>
import Chat from './Chat'
import De from './De'

export default {
    name: 'Sidebar',
    components : {
        Chat, De
    }

}
</script>
