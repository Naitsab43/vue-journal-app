<template>

  <div @click="$router.push({name: 'entry', params: {id: 1} })" class="entry-container mb-3 pointer p-2">

    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Septiembre</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      Nostrud occaecat incididunt anim nostrud ea aliquip consectetur sit do qui eiusmod anim. Adipisicing aute et irure laborum quis labore cupidatat ea excepteur non sint.
    </div>

  </div>

</template>

<script>

export default {

  name: "Entry",
  data(){
    return {}
  },

}

</script>

<style lang="scss" scoped>

.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

}

.entry-description {
  font-size: 12px;
}

</style>