<template>
  <v-footer
    height="auto"

  >
    <v-layout
      justify-center
      row
      wrap
    >

      <v-flex

        blue-grey lighten-1
        py-3
        text-xs-center
        white--text
        xs12
      >
       2019-{{currentYear}} — <strong>ООО "НПП СИСТЕМА48"</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      currentYear: new Date().getFullYear()
    })
  }
</script>
