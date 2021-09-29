<template>
  
  <div class="entry-list-container">

    <div class="px-2 pt-2">

      <input class="form-control" type="text" placeholder="Buscar entrada">

    </div>

    <div class="entry-scrollarea">
      <Entry v-for="entry in 100" :key="entry" />
    </div>

  </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {

  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue"))
  } 

}

</script>

<style lang="scss" scoped>
a
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 105px);
  overflow: scroll;
}

</style>
