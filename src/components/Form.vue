<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-text-field
            v-for="field in formFields"
            :key="field.key"
            :label="field.label"
            :hint="field.hint"
            :rules="field.rules ? field.rules : []"
            persistent-hint
            v-model="formData[field.key]"
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
  const rules = {
    requiredRule: value => !!value || 'Required',
  }

  export default {
    name: 'Form',

    data: () => ({
      formData: {},
      formFields: [
        {
          key: 'officeID',
          label: 'Office ID',
          hint: 'Needs to be a valid LockedOn UUID of an existing office with enabled enquiry access',
          rules: [rules.requiredRule]
        }, {
          key: 'referralSource',
          label: 'Referral Source',
          hint: 'Needs to be the same as what it is in LockedOn',
          rules: [rules.requiredRule]
        }, {
          key: 'property',
          label: 'Property ID',
          hint: `Needs to be a valid LockedOn UUID, belonging to the given office. If not then all enquiries
will not be linked to a property`,
          rules: [rules.requiredRule]
        }
      ]
    }),

    computed: {
      textAreaValue () {
        return 'OK'
      }
    },
  }
</script>
