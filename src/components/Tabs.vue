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
                Нематериальные активы
            </v-tab>
            <v-tab @click="forceRerender">
                Экспертный аудит
            </v-tab>
            <v-tab @click="forceRerender">
                Наши успехи
            </v-tab>
            <v-tab>
                Подробнее о проекте
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

                                <v-list-tile v-else :key="item.title" avatar @click="openPdf(item.src)">
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
                        <v-list two-line>
                            <template v-for="(item, index) in items2">
                                <v-subheader v-if="item.header" :key="item.header">

                                </v-subheader>

                                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                                <v-list-tile v-else :key="item.title" avatar @click="openPdf(item.src)">
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
                </v-layout>


            </v-tab-item>
            <v-tab-item>
                <tabslider v-bind:src="gramots" post-title=4 itshow='true' :key="componentKey" />
            </v-tab-item>
            <v-tab-item>
                <v-layout row wrap>

                    <v-flex xs12 sm12 md4>
                        <v-card flat>
                            <v-card-text> <iframe src="//docs.google.com/gview?url=system48.ru/img/English48.pptx&embedded=true" style="width:100%; height:190px;" frameborder="0"></iframe></v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md4>
                        <v-card flat>
                            <v-card-text> <iframe src="//docs.google.com/gview?url=system48.ru/img/Russian48.pptx&embedded=true" style="width:100%; height:190px;" frameborder="0"></iframe></v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md4>
                        <v-card flat>
                            <v-card-text> <iframe src="//docs.google.com/gview?url=system48.ru/img/German48.pptx&embedded=true" style="width:100%; height:190px;" frameborder="0"></iframe></v-card-text>
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

        },
        computed: {

        },
        data() {
            return {
                componentKey: 0,
                itshow: null,
                items: [{

                        title: "Development and investigation of a symmetric induction heating unit for spherical shape metal ware",
                        subtitle: "Journal of Chemical Technology and Metallurgy ",
                        src: "/img/newspaper/Bukgar2018.pdf"
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {

                        title: 'Расчет и разработка экспериментальной индукционной установки для симметричной закалки мелющих металлических шаров',
                        subtitle: "Черные металлы",
                        src: "/img/newspaper/CherMet.pdf"
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {

                        title: 'Исследование распределения энергии электромагнитного поля в объёме металлического шара при нагреве в индукторе',
                        subtitle: "Нижегородский государтвенны технический университет им. Р.Е. Алексеева",
                        src: "/img/newspaper/Issledovanie_raspredlenia.pdf"
                    },
                    {

                        title: 'Анализ влияния электромагнитных сил на кинематтику движения шара в процессе осесимметричного индукционного нагрева',
                        subtitle: "Электротехнические системы и комплексы ",
                        src: "/img/newspaper/Magnitogorsk.pdf"
                    }
                ],
                items2: [{

                        title: "Induction Heating Plant for Heat Treatment of Spherical Metal Products",
                        subtitle: "RUSSIAN METALLURGY (METALLY)",
                        src: "/img/newspaper/RussianMet.pdf"
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {

                        title: 'Исследования и разработка электро термического оборудования непрерывного действия для симметричного индукционного нагрева под закалку мелющих шаров',
                        subtitle: "Сталь",
                        src: "/img/newspaper/Steeel.pdf"
                    },
                    {
                        divider: true,
                        inset: true
                    },
                    {

                        title: 'Энергетические показатели электротехнического комплекса для симметричного индукционного нагрева металлоизделий шарообразной формы',
                        subtitle: "Вестник ЮУрГУ. Серия «Энергетика»",
                        src: "/img/newspaper/Vest-URGTU.pdf"
                    },
                    {

                        title: 'Разработка и исследование системы управления индуктором для электротехнических комплексов по симметричному индукционному нагреву металлоизделий шарообразной формы',
                        subtitle: "«Вестник ИГЭУ»",
                        src: "/img/newspaper/Bukgar2018.pdf"
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
            },
            openPdf(itsrc) {

                window.open(itsrc)

            }



        }
    }
</script>
<style>

</style>
