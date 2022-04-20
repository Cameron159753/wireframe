<template>
  <div class="home">
    <Inbox/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inbox from '@/components/Inbox.vue'

export default {
  name: 'HomeView',
  components: {
    Inbox
  }
}
</script>
