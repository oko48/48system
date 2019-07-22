<template>
    <div>
        <!-- swiper -->
        <swiper :options="swiperOption" v-show="itemshow">
            <swiper-slide v-for="(item, index) in src" :key="index">
                <v-img :src="item.src"></v-img>
<!--                       {{item}}-->
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>

    export default {

        components: {
            //            swiper,
            //            swiperSlide
        },
        props: ['postTitle', 'itshow', 'src'],

        data() {
            return {
                //image: 'http://lorempixel.com/1920/1920?0',
                swiperOption: {
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },

                    slidesPerView: this.postTitle,
                    spaceBetween: 50,
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
            itemshow: function() {

                return this.itshow
            }

        },
        mounted() {

        },
        methods: {


            //

        }
    }
</script>
<style scope>
 .swiper-container {
        padding-top: 5px;
        height: 430px;
        width: 100%;
    }

    .v-window__container {
        height: 450px;
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

    .v-avatar .v-icon,
    .v-avatar .v-image,
    .v-avatar img {
        border-radius: 0 !important;
    }
</style>
