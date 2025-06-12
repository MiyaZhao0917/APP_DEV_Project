<template>
  <Frame>
    <Page>
      <ActionBar title="Silver Slumber" />
      <TabView :selectedIndex.sync="selectedIndex">
        <TabViewItem title="Playing" iconSource="~/assets/icons/play.png">
          <GridLayout rows="auto, *" class="p-4">
            <Label :text="playbackText" class="text-lg text-center mb-4" />
            <StackLayout row="1">
              <TimerButton @set-timer="onSetTimer" />
              <EmergencyCallButton @emergency-call="onEmergencyCall" />
            </StackLayout>
          </GridLayout>
        </TabViewItem>

        <TabViewItem title="Select Sound" iconSource="~/assets/icons/list.png">
          <ScrollView>
            <StackLayout class="p-4">
              <GridLayout columns="*,*">
                <NoiseCard
                  v-for="type in types"
                  :key="type"
                  :title="type"
                  @select="selectType(type)"
                />
              </GridLayout>
              <StackLayout v-if="sounds[selected]">
                <Button
                  v-for="s in sounds[selected]"
                  :key="s"
                  :text="s"
                  @tap="play(s)"
                  class="newmorphic p-2 mt-2"
                />
              </StackLayout>
            </StackLayout>
          </ScrollView>

        </TabViewItem>
        <TabViewItem title="Favourites" iconSource="~/assets/icons/favorite.png">
          <ListView for="item in favorites">
            <v-template>
              <Label :text="item" />
            </v-template>
          </ListView>

        </TabViewItem>
        <TabViewItem title="Sleep Record" iconSource="~/assets/icons/sleep.png">
          <StackLayout class="p-4">
            <SleepChart :data="records" />
          </StackLayout>

        </TabViewItem>
        <TabViewItem title="Setting" iconSource="~/assets/icons/settings.png">
          <StackLayout class="p-4">
            <Button text="Personal Account" class="newmorphic p-4 mt-2" />
            <Button text="Upload A Sound" class="newmorphic p-4 mt-2" />
            <Button text="Help & Advice" class="newmorphic p-4 mt-2" />
          </StackLayout>
        </TabViewItem>
      </TabView>
    </Page>
  </Frame>
</template>

<script>
import TimerButton from './components/TimerButton.vue';
import EmergencyCallButton from './components/EmergencyCallButton.vue';
import NoiseCard from './components/NoiseCard.vue';
import SleepChart from './components/SleepChart.vue';

export default {
  data() {
    return {
      selectedIndex: 0,
      playbackText: '',
      types: ['White', 'Pink', 'Brown', 'Green'],
      sounds: { White: ['Television Static​','Whirring Fan​','Vacuum Cleaner​'],
                Pink: ['Ocean Waves','Steady Rainfall​','Traffic'],
                Brown: ['Rumbling Thunder​','Waterfall​','Shower'], 
                Green: ['Birdsong','Breeze Blowing','Babbling Brook'] },
      selected: '',
      // Favorites.vue
      favorites: [],
      // SleepRecords.vue
      records: []
    };
  },
  components: { TimerButton, EmergencyCallButton, NoiseCard, SleepChart },
  methods: {
    // from Playback.vue
    onSetTimer(ms) {},
    onEmergencyCall() {},
    // from NoiseSelection.vue
    selectType(t) { this.selected = t; },
    play(s) {},
  }
};
</script>

<style scoped>
.mt-2 { margin-top: 8px; }
.newmorphic {
  background: #e0e0e0;
  border-radius: 16px;
  box-shadow: 6px 6px 16px #bebebe, -6px -6px 16px #ffffff;
}
</style>
