<template>
  <div class="media bg-dark text-white py-4 px-2 d-flex flex-column">
  <video v-if="space.media_type == 'video'" src="{{space.url}}" controls autoplay></video>
  <img v-else src="{{space.url}}" class="mr-3" alt="Space">
  <div class="media-body ml-2 pt-4">
    <p>{{space.date}}</p>
    <h5 class="mt-0">{{space.title}}</h5>
    <p>{{space.explanation}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'MediaElement',
  props: {
    space: {
      type: Object,
      required: true
    }
  },
  setup () {
    return {}
  },
  components: {}
}
</script>

<style scoped>

</style>
