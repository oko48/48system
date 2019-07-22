<template>
    <v-container my-0 py-0 fluid grid-list-md text-xs-center>
        <!--
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Научные работы</h2>
            </v-flex>
        </v-layout>
-->
        <v-tabs fixed-tabs>
            <v-tab @click="forceRerender">
                Патенты
            </v-tab>
            <v-tab @click="forceRerender">
                Статьи
            </v-tab>
            <v-tab @click="forceRerender">
                Грамоты
            </v-tab>
            <v-tab>
                Презентации
            </v-tab>
            <v-tab-item>

                <tabslider v-bind:src="patent" post-title=3 itshow='true' :key="componentKey" />


                <!--               <embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=http://system48.ru/the.pdf" width="500" height="375">-->


            </v-tab-item>
            <v-tab-item>
                <!--                <tabslider v-bind:src="newspaper"  post-title=3 itshow='true' :key="componentKey" />-->
                <!--
                v-for="item in newsp"
                v-bind:key="item.id"
                v-bind:src="item.src"

-->
                <v-layout row wrap>
                    <v-flex xs12 sm12 md6>
                        <v-list two-line>
                            <template v-for="(item, index) in items">
                                <v-subheader v-if="item.header" :key="item.header">

                                </v-subheader>

                                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                                <v-list-tile v-else :key="item.title" avatar @click="openPdf">
                                    <v-list-tile-avatar>
                                        <img :src="require('@/assets/pdf.svg')">
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </template>
                        </v-list>
                    </v-flex>
                    <v-flex xs12 sm12 md6>
                        2
                    </v-flex>
                </v-layout>


            </v-tab-item>
            <v-tab-item>
                <tabslider v-bind:src="gramots" post-title=4 itshow='true' :key="componentKey" />
            </v-tab-item>
            <v-tab-item>
                <v-layout row wrap>

                    <v-flex xs12 sm12 md6>
                        <v-card flat>
                            <v-card-text> <iframe src="//docs.google.com/gview?url=system48.ru/img/English48.pptx&embedded=true" style="width:400px; height:300px;" frameborder="0"></iframe></v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6>
                        <v-card flat>
                            <v-card-text> <iframe src="//docs.google.com/gview?url=system48.ru/img/German48.pptx&embedded=true" style="width:400px; height:300px;" frameborder="0"></iframe></v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-tab-item>

        </v-tabs>
    </v-container>
</template>

<script>
    import Tabslider from '@/components/Tabslider.vue'

    export default {
        components: {
            Tabslider,
            Tabslider2: () => import('@/components/Tabslider2'),

        },
        computed: {

        },
        data() {
            return {
                componentKey: 0,
                itshow: null,
                items: [
                    {

                        title: "Development and investigation of a symmetric induction heating unit for spherical shape metal ware",
                        subtitle: "The present communication considers a symmetric induction heating unit for spherical shape metal ware. <br/ >It analyzes the corresponding electromagnetic processes, determines the inductor optimum frequency and amperage values and provides results of the experimental investigation.",
                        src: require('@/assets/patent/0001.jpg')
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {

                        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {

                        title: 'Oui oui',
                        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                    }
                ],

                newspaper: [{
                        id: 0,
                        src: require('@/assets/patent/0001.jpg')
                    },
                    {
                        id: 1,
                        src: require('@/assets/patent/0002.jpg')
                    },
                ],
                patent: [{
                        id: 0,
                        src: require('@/assets/patent/0001.jpg')
                    },
                    {
                        id: 1,
                        src: require('@/assets/patent/0002.jpg')
                    },
                    {
                        id: 2,
                        src: require('@/assets/patent/0003.jpg')
                    },

                ],
                gramots: [{
                        id: 0,
                        src: require('@/assets/gramots/0001.jpg')
                    },
                    {
                        id: 1,
                        src: require('@/assets/gramots/00Startaptour.jpg')

                    },
                    {
                        id: 2,
                        src: require('@/assets/gramots/bootcamp_generation_2017.jpg')

                    },
                    {
                        id: 3,
                        src: require('@/assets/gramots/httm-2011.jpg')

                    },
                    {
                        id: 4,
                        src: require('@/assets/gramots/ingen2010.jpg')

                    },
                    {
                        id: 5,
                        src: require('@/assets/gramots/kindai-titov.jpg')

                    },
                    {
                        id: 6,
                        src: require('@/assets/gramots/laureat-obr.jpg')

                    },
                    {
                        id: 7,
                        src: require('@/assets/gramots/lider-nlmk.jpg')

                    },
                    {
                        id: 8,
                        src: require('@/assets/gramots/mfti.jpg')

                    },
                    {
                        id: 9,
                        src: require('@/assets/gramots/minobr.jpg')

                    },
                    {
                        id: 10,
                        src: require('@/assets/gramots/rospatent.jpg')

                    },
                    {
                        id: 11,
                        src: require('@/assets/gramots/molspec.jpg')

                    },
                    {
                        id: 12,
                        src: require('@/assets/gramots/StartupVillage.jpg')

                    },
                    {
                        id: 13,
                        src: require('@/assets/gramots/stipPresid.jpg')

                    },
                    {
                        id: 14,
                        src: require('@/assets/gramots/top-100.jpg')

                    }
                ]

            }
        },
        methods: {
            forceRerender() {
                this.componentKey += 1
                this.$nextTick(function() {
                    // теперь DOM обновлён
                    // `this` указывает на текущий экземпляр
                    this.componentKey -= 1
                })

                console.log(this.componentKey)
            },
            openPdf(){
                window.open("https://www.ya.ru")

            }



        }
    }

</script>
<style>
    .swiper-container {
        padding-top: 5px;
        height: 430px;
        width: 100%;
    }

    .v-window__container {
        height: 450px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #eee;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

</style>
