<template>
  
  <div class="entry-list-container">

    <div class="px-2 pt-2">

      <input v-model="term" class="form-control" type="text" placeholder="Buscar entrada">

    </div>

    <div class="mt-2 d-flex flex-column">

      <button 
        class="btn btn-primary mx-3"
        @click="$router.push({name: 'entry', params: {id: 'new'} })"
      >
        <i class="fa fa-plus-circle"></i>
        Nueva entrada
      </button>

    </div>

    <div class="entry-scrollarea">
      <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry" />
    </div>

  </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'

export default {

  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue"))
  },

  data() {
    return {
      term: ""
    }
  },

  computed: {

    entriesByTerm(){
      return this.getEntriesByTerm(this.term)
    },
    ...mapGetters("journal", ["getEntriesByTerm"])

  },


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
