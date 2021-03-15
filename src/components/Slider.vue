<template>
    <v-container fluid grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6>
                <v-card dark color="secondary">
                    <v-carousel :cycle="false">

                        <v-carousel-item>
                            <video height="500" poster="@/assets/video/vid001.jpg" preload="auto" autoplay="true" loop="true" muted="muted" controls="controls" tabindex="0">
                                <source height="500" src="@/assets/video/film1.mp4" type='video/mp4' />
                                <source height="500" src="@/assets/video/film1.webm" type='video/webm; codecs="vp8, vorbis"' />
                                <!--                                <source src="@/assets/video/film1.ogv" type='video/ogg; codecs="theora, vorbis"' />-->
                            </video>
                        </v-carousel-item>
                        <v-carousel-item>
                            <v-img height="500" :src="require('@/assets/img001.jpg')"></v-img>
                        </v-carousel-item>
                        <v-carousel-item>
                            <iframe height="500" width="780" src="https://www.youtube.com/embed/aztnjzAbpt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </v-carousel-item>

                    </v-carousel>

                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6>
                <v-card class="slider">
                    <v-card-text class="title-right">

                        <p><b>"ООО "НПП Система48"</b> разработало технологию и энергоэффективное оборудование непрерывного действия, обеспечивающие осесимметричный на заданную глубину нагрев под термообработку изделий шарообразной формы без окисления и обезуглероживания.</p>
                        <p>
                            Предлагается индукционный способ нагрева с прямым и высокоскоростным (секунды – доли секунды) превращением энергии электромагнитного поля в тепловую, отличающийся простотой регулирования температуры и глубины прогрева, что позволяет получать после закалки и отпуска оптимальное сочетание высокой поверхностной твёрдости изделий (контактная выносливость) с относительно пластичной сердцевиной (противораскалываемость).</p>

                        <p>
                            НИОКР были осуществлены в том числе при поддержке со стороны ФГБУ "Фонд содействия инновациям"</p>
                        <p>Исследования осуществляются при грантовой поддержке Фонда «Сколково"</p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {

        },

        methods: {


        },
        data() {
            return {

            }
        }
    }
</script>
<style scope>
    .title-right {
        font-size: 1rem;
        text-align: justify;
    }

    .slider {
        height: 500px;
        overflow: hidden;
        display: flex;
/*        align-items: center;*/
        /*        max-height: 320px*/
    }
</style>
