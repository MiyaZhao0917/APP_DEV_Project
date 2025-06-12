<template>
  <Page>
    <ActionBar title="Sleep Record" />
    <StackLayout>
      <SleepChart :data="records" />
    </StackLayout>
  </Page>
</template>
<script>
import SleepChart from '../components/SleepChart.vue';
export default {
  name: 'SleepRecords',
  components: { SleepChart },
  data() { return { records: [] }; }
};
</script>