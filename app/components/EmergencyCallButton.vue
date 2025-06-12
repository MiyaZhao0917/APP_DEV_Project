<template>
  <Button class="newmorphic p-4 mt-2" text="Emergency Call" @tap="makeCall"/>
</template>
<script>
import { Utils } from '@nativescript/core';
export default {
  name: 'EmergencyCallButton',
  methods: {
    makeCall() {
      Utils.openUrl('tel:120');
      this.$emit('emergency-call');
    }
  }
};
</script>