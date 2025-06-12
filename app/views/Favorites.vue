<template>
  <Page>
    <ActionBar title="Favourites" />
    <ListView for="item in favourites">
      <v-template>
        <Label :text="item" />
      </v-template>
    </ListView>
  </Page>
</template>
<script>
export default {
  name: 'Favourites',
  data() { return { favourites: [] }; }
};
</script>