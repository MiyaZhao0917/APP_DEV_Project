<template>
  <Page>
    <ActionBar title="Playing" />
    <GridLayout rows="auto, *" class="p-4">
      <Label :text="currentNoise || 'Please choose a sound'" class="text-lg text-center mb-4" />
      <StackLayout row="1">
        <TimerButton @set-timer="onSetTimer" />
        <EmergencyCallButton @emergency-call="onEmergencyCall" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>
<script>
import TimerButton from '../components/TimerButton.vue';
import EmergencyCallButton from '../components/EmergencyCallButton.vue';
export default {
  name: 'Playback',
  components: { TimerButton, EmergencyCallButton },
  data() { return { currentNoise: '' }; },
  methods: {
    onSetTimer(ms) {},
    onEmergencyCall() {}
  }
};
</script>