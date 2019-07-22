<template>
    <v-app>
        <core-toolbar />
        <slider />
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Научные работы</h2>
            </v-flex>
        </v-layout>
        <tabs />
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Команда проекта</h2>
            </v-flex>
        </v-layout>
        <v-layout pb-5 row wrap>
            <v-flex xs12 sm12 md4>
                <img class="team" src="@/assets/kof.png"></img>
                <v-list class="team-name">
                                    <v-list-tile-content>
                                        <v-list-tile-title  class="team-text">Алксандр</v-list-tile-title>
                                        <v-list-tile-sub-title  class="team-text">Я снимаю административные барьеры и умею продавать.</v-list-tile-sub-title>
                                    </v-list-tile-content>

                        </v-list>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <img class="team" src="@/assets/tit.png"></img>

                 <v-list class="team-name">
                                    <v-list-tile-content>
                                        <v-list-tile-title  class="team-text">Сергей</v-list-tile-title>
                                        <v-list-tile-sub-title  class="team-text">Я автор идеи проекта, обладаю сочетанием важнейших компетенций, собрал команду и мне известна конечная цель!</v-list-tile-sub-title>
                                    </v-list-tile-content>

                        </v-list>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <img class="team" src="@/assets/bez.png"></img>
                <v-list class="team-name">
                                    <v-list-tile-content>
                                        <v-list-tile-title  class="team-text">Даниил</v-list-tile-title>
                                        <v-list-tile-sub-title  class="team-text">Я общаюсь с машинами как с людьми.</v-list-tile-sub-title>
                                    </v-list-tile-content>

                        </v-list>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12>
                <h2>Проект поддержан</h2>
            </v-flex>
        </v-layout>
        <v-layout pb-5 row justify-space-around>
            <v-flex xs2>
                <v-img width="220" :src="require('@/assets/fasie_rus.png')" @click="OpenFasie"></v-img>

            </v-flex>
            <v-flex xs2>
                <v-img width="100" :src="require('@/assets/skolkovo2.png')"></v-img>
            </v-flex>
        </v-layout>

        <v-spacer></v-spacer>
        <footers />

    </v-app>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {

            CoreToolbar: () => import('@/components/Toolbar'),
            Slider: () => import('@/components/Slider'),
            Tabs: () => import('@/components/Tabs'),
            Footers: () => import('@/components/Footers'),
            //      TabsliderLogo: () => import('@/components/TabsliderLogo'),

        },
        methods: {
            OpenFasie() {
                window.open("http://fasie.ru")
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .team {
        width: 100px;
        border-radius: 50%;
        margin: 20px 0 -20px;
    }
    .team-text{
        text-align: center !important;
        margin-top:  2px;
        white-space: unset!important;

    }
    .team-name {
        margin: 0 20px;
        height: 100px;
    }
</style>
