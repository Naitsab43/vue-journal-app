<template>
  
  <div class="entry-title d-flex justify-content-between p-2">

    <span class="text-success fs-3 fw-bold">15</span>
    <span class="mx-1 fs-3">Septiembre</span>
    <span class="mx-2 fs-3 fw-light">2021, jueves</span>

  </div>

  <div>

    <button class="btn btn-danger mex-2">
      Borrar
      <i class="fa fa-trash-alt"></i>
    </button>

    <button class="btn btn-primary">
      Subir imagen
      <i class="fa fa-upload"></i>
    </button>

  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">

    <textarea placeholder="¿Que sucedio hoy?"></textarea>

  </div>

  <Fab 
    icon="fa-save"
  />

  <img class="img-thumbnail" src="https://conceptodefinicion.de/wp-content/uploads/2019/06/letras-1.jpg" alt="A">

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue"))
  }
}
</script>

<style lang="scss" scoped>

textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }

}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>