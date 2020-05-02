<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-text-field
            label="Office ID"
            v-model="officeID"
            :rules="[requiredRule]"
            filled />
      </v-col>
      <v-col>
        <v-textarea
          filled
          :value="textAreaValue"
          label="Embed Code" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Form',

    data: () => ({
      officeID: '',

      // Rules
      requiredRule: value => !!value || 'Required'
    }),

    computed: {
      textAreaValue () {
        return 'OK'
      }
    },
  }
</script>
