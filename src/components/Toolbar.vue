<template>
    <v-toolbar app flat>
       <v-menu  class="hidden-md-and-up">
      <template #activator="{ on: menu }">
        <v-tooltip bottom>
          <template #activator="{ on: tooltip }">
            <v-toolbar-side-icon v-on="{ ...tooltip, ...menu }" class="hidden-md-and-up" @click="show = !show" key="menu" />
          </template>
          <span>Система48</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in links"
          :key="index"
          @click=""
        >
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

        <v-container mx-auto py-0>
            <v-layout>
                <v-img :src="require('@/assets/logo.png')" class="mr-5" contain height="50" width="167" max-width="167" @click="$vuetify.goTo(0)" />
                <v-btn v-for="(link, i) in links" :key="i" :to="link.to" class="ml-5 hidden-sm-and-down" flat @click="onClick($event, item)">
                    {{ link.text }}
                </v-btn>

                <v-spacer />

            </v-layout>
        </v-container>
    </v-toolbar>
</template>

<script>
    export default {

        computed: {

        },

        methods: {
            onClick(event, item) {
                console.log(event + " " + item)
            },


        },
        data() {
            return {
                show: false,
                links: [{
                        text: 'Научные работы',
                        link: '#first'
                    },
                    {
                        text: 'Команда'
                    },
                    {
                        text: 'Проект поддержан'
                    },
                    {
                        text: 'Контакты'
                    }
                ]
                //
            }
        }
    }
</script>
