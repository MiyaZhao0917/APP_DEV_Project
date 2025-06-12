<template>
  <Page>
    <ActionBar title="Select Sound" />
    <ScrollView>
      <StackLayout class="p-4">
        <GridLayout columns="*,*">
          <NoiseCard v-for="type in types" :key="type" :title="type" @select="selectType(type)" />
        </GridLayout>
        <StackLayout v-if="sounds[selected]">
          <Button v-for="s in sounds[selected]" :key="s" :text="s" @tap="play(s)" class="newmorphic p-2 mt-2" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
import NoiseCard from '../components/NoiseCard.vue';
export default {
  name: 'NoiseSelection',
  components: { NoiseCard },
  data() {
    return {
      types: ['White','Pink','Brown','Green'],
      sounds: { White: ['Television Static​','Whirring Fan​','Vacuum Cleaner​'],
                Pink: ['Ocean Waves','Steady Rainfall​','Traffic'],
                Brown: ['Rumbling Thunder​','Waterfall​','Shower'], 
                Green: ['Birdsong','Breeze Blowing','Babbling Brook'] },
      selected: ''
    };
  },
  methods: {
    selectType(t) { this.selected = t; },
    play(s) { }
  }
};
</script>