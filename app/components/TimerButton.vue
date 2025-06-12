<template>
  <StackLayout>
    <Button class="newmorphic p-4 mt-2" @tap="showTimerPicker">Timer</Button>
    <TimePicker v-if="showPicker" :hour="hour" :minute="minute" @timeChange="onTimeChange" class="mt-2"/>
    <Button v-if="showPicker" text="Confirm" @tap="confirmTimer" class="newmorphic p-4 mt-2"/>
  </StackLayout>
</template>
<script>
export default {
  name: 'TimerButton',
  data() {
    return { showPicker: false, hour: 0, minute: 0 };
  },
  methods: {
    showTimerPicker() {
      this.showPicker = true;
    },
    onTimeChange({ value }) {
      this.hour = value.getHours();
      this.minute = value.getMinutes();
    },
    confirmTimer() {
      const totalMs = (this.hour * 60 + this.minute) * 60 * 1000;
      this.$emit('set-timer', totalMs);
      this.showPicker = false;
    }
  }
};
</script>