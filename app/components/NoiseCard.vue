<template>
  <StackLayout orientation="horizontal" class="newmorphic p-4 mt-2" @tap="$emit('select')">
    <Image :src="icon" width="24" height="24"/>
    <Label :text="title" class="ml-2"/>
  </StackLayout>
</template>
<script>
export default {
  name: 'NoiseCard',
  props: { title: String },
  computed: {
    icon() {
      const map = { White: '~/assets/icons/white.png', Pink: '~/assets/icons/pink.png', Brown: '~/assets/icons/brown.png', Green: '~/assets/icons/green.png' };
      return map[this.title] || '~/assets/icons/default.png';
    }
  }
};
</script>