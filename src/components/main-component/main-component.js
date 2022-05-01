
import '../main-component/main-component.scss';
import VideoCardComponent from '../video-card/videoCard.vue'
import { onMounted, ref } from 'vue';
import * as videos from '../../assets/data/data-source.json'

export default {
    name: 'main-component',

    setup() {
        const response = ref(videos);
        const filterdVideos = ref([]);
        const videosList = ref([]);
        const searchValue = ref("")
        const sortedValue = ref(1);
        const sortType = ref('asc');
        const perPage = ref(10)
        const pageNum = ref(1)
        const isScrolled = ref(false)

        const onScrollStop = callback => {
            let isScrolling;
            window.addEventListener(
              'scroll',
              e => {
                clearTimeout(isScrolling);
                isScrolling = setTimeout(() => {
                  callback();
                }, 150);
              },
              false
            );
          };
        const init = () => {
            search()
            window.onscroll = function () {
                //detect if user scrolled 
                if (window.pageYOffset > 0) {
                    isScrolled.value = true
                }else {
                    isScrolled.value = false
                }
                //load more videos in page when scroll ended
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                    loadMore()
                }
            };
         
        }
        // search Function 
        function search() {
            //scroll to top of the page 
            window.scrollTo(0, 0);
            //filtering
            let videos;
            if (searchValue.value != null || searchValue.value != '') {
                videos = (
                    Array.from(response.value).filter(v =>
                        v.title.toLowerCase().indexOf(searchValue.value .toLowerCase()) >= 0 ||
                        v.parent_name.toLowerCase().indexOf(searchValue.value .toLowerCase()) >= 0
                    ))
            } else {
                videos = Array.from(response.value)
            }
            //sorting
            if (sortType.value == 'asc' || sortType.value == 'desc') {
                videos.sort((a, b) => {
                    let diff;
                    if (sortedValue.value == '1') {
                        diff = a.views - b.views
                    } else if (sortedValue.value == '2') {
                        diff = a.likes - b.likes

                    } else if (sortedValue.value == '3') {
                        diff = a.shares - b.shares

                    }
                    if (diff === 0) {
                        return 0
                    }
                    const sign = Math.abs(diff) / diff

                    return sortType.value == 'asc' ? sign : -sign;
                })

            }

            pageNum.value = 1
            filterdVideos.value = videos

            //bind videos list
            if(isScrolled.value) {
                onScrollStop(() => {
                    videosList.value = filterdVideos.value.slice(0, perPage.value * pageNum.value)
                 });
            } else {
                videosList.value = filterdVideos.value.slice(0, perPage.value * pageNum.value)
            }


        };
        // handle default filter
        function searchChange(e) {
            if (e.target.value == null || e.target.value == '') {
                this.searchValue = ''
                this.sortType = "asc"
                this.sortedValue = 1
            }
        }
        //load more videos event
        function loadMore() {
            debugger
            pageNum.value = pageNum.value + 1
            if (filterdVideos.value.length > 0) {
                videosList.value = Array.from(filterdVideos.value).slice(0, perPage.value * pageNum.value)
            } else {
                videosList.value = Array.from(response.value).slice(0, perPage.value * pageNum.value)
            }

        }

        onMounted(init)
        
        return {
            response,
            filterdVideos,
            videosList,
            searchValue,
            sortedValue,
            sortType,
            isScrolled,
            search,
            searchChange,
            loadMore,
            onScrollStop
        }
    },
    components: {
        VideoCardComponent
    }


}