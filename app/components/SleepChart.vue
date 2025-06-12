<template>
  <StackLayout class="p-4">
    <Label text="[Sleep Statistical Chart]" />
  </StackLayout>
</template>
<script>
export default {
  name: 'SleepChart',
  props: { data: Array }
};
</script>