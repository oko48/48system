<template>
    <div>
        <!-- swiper -->
        <swiper :options="swiperOption">
            <swiper-slide v-for="item, index) in partner" :key="index">
                <v-img :src="item.src"></v-img>
            </swiper-slide>

        </swiper>
    </div>

</template>

<script>
    export default {

        components: {
            //            swiper,
            //            swiperSlide
        },


        data() {
            return {
                itemshow: true,
                partner: [{
                        id: 0,
                        src: require('@/assets/fasie_rus.png')
                    },
                    {
                        id: 1,
                        src: require('@/assets/skolkovo2.png')
                    },
                    {
                        id: 2,
                        src: require('@/assets/lipetsk.jpg')
                    }

                ],
                swiperOption: {

                    slidesPerView: 3,
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }
                }






            }

        },
        computed: {


        },
        mounted() {

        },
        methods: {


            //

        }
    }
</script>
<style scope>
/*
 .swiper-container {
        padding-top: 5px;
        height: 220px;
        width: 100%;
    }

    .v-window__container {
        height: 230px;
    }

    .v-image__image--cover {
        background-size: contain;
    }

    .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: transparent;
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
*/
</style>
