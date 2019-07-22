<template>
    <div>
        <!-- swiper -->
        <swiper :options="swiperOption" v-show="itemshow">
            <swiper-slide v-for="(item, index) in link" :key="index">
                {{item.text}}
                {{postTitle}}
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
        props: ['postTitle', 'itshow'],

        data() {
            return {
                itemshow: true,
                link: [{
                        text: 'Научные работы',
                        link: '#first'
                    },
                    {
                        text: 'Команда22'
                    },
                    {
                        text: 'Проект подде222ржан'
                    },
                    {
                        text: 'Контак222ты'
                    },
                    {
                        text: 'Конт22акты2'
                    }
                ],
                swiperOption: {
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: false
                    },
                    slidesPerView: 4,
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
