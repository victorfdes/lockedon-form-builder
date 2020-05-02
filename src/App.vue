<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      LockedOn iFrame Form builder
    </v-app-bar>

    <v-content>
      <Form/>
    </v-content>
  </v-app>
</template>

<script>
import Form from './components/Form';

export default {
  name: 'App',

  components: {
    Form,
  },

  data: () => ({
    //
  }),
};
</script>
