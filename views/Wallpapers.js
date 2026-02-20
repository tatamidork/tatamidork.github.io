import { useRoute } from 'vue-router';

const validIds = [
  "asd-1",
  "asd-2",
];
const checkParameter = value => {
  
  if (value) {
    if (!validIds.includes(value)) {
      return '';
    }
  }

  return value;
};

export default {
  template: /*html*/`
      <div class="wallpapers">
        <div class="container" :class="{ blur: selectedWallpaper }">
          <!--div>selected: {{ $route.params.wallpaper }}</div-->
          <div class="card" v-for="i in 14" :key="i">
            <div class="thumb" :class="'image-' + i"></div>

            <div class="card-body">
              <div class="card-title">Title</div>

              <div class="card-details">
                Short description goes here.
              </div>

              <div class="actions">
                <div class="button" @click="goToHomePage(i)">
                  Download
                </div>
              </div>
            </div>
          </div>
          <div class="loading-message">loading...</div>
        </div>
        <div v-if="selectedWallpaper" class="selected">
          <div class="item-info">
            <img :src="source[selectedWallpaper]" />
            <div class="details">
              <h2>Description</h2>
              <div>
                High-res wallpaper bundle for your Phone and/or iPad (any tablet in general).

                Contains:
                - Phone wallpaper for vertical 19.5:9 aspect ratio (1440 x 3120 px PNG)
                - Ipad Wallpaper for vertical 3:4 aspect ratio ( 2048 x 2732 px PNG)

                NOTE: Images are only to be used for the intended purpose (wallpapers). Printing, reproduction, or any other use is strictly PROHIBITED.
                {{ source[selectedWallpaper] }}
              </div>
            </div>
          </div>
          <div class="purchase-info">
            Title
          </div>
        </div>
      </div>
  `,
  beforeRouteUpdate(to, from, next) {
    this.selectedWallpaper = checkParameter(to.params.wallpaper);
    next();
  },
  setup(props, ctx) {
    console.log('Wallpapers component mounted');

    const route = useRoute();

    const selectedWallpaper = checkParameter(route.params.wallpaper);

    const intervalId = setInterval(() => {
      if (document.getElementById('loading').classList.contains('hidden')) {
        document.querySelector('.wallpapers .loading-message').classList.add('hidden');
        clearInterval(intervalId);
      }
    }, 100);

    return {
      selectedWallpaper,
      source: {
        "asd-1": "./assets/wallpapers/Arcade Wall preview.png",
        "asd-2": "./assets/wallpapers/Arcade Wall preview.png",
      }
    };
  },
  methods: {
    goToHomePage(index) {
      // Using a string path
      this.$router.push(`./asd-${index}`);

      // // Using a named route with params
      // this.$router.push({ name: 'UserProfile', params: { id: '123' } });

      // // With query parameters (results in /register?plan=private)
      // this.$router.push({ path: '/register', query: { plan: 'private' } });
    },
    onSelect(event) {
      const el = event.target;
      if (el.classList.contains('zoom')) {
        this.removeZoom(el);
      } else {
        for (const child of document.querySelectorAll('.portfolio .art')) {
          this.removeZoom(child);
        }
        this.addZoom(el);
      }
    },
    removeZoom() {
      const fullscreen = document.querySelector('.fullscreen');
      const classesToRemove = Array.from(fullscreen.classList).filter(className =>
        className.startsWith('zoom-image')
      );

      classesToRemove.forEach(className => fullscreen.classList.remove(className));
      fullscreen.classList.remove('zoom');
      fullscreen.classList.remove('square');
    },
    addZoom(el) {
      const parent = document.querySelector('.portfolio.container .items');
      const index = Array.prototype.indexOf.call(parent.children, el) + 1;
      const fullscreen = document.querySelector('.fullscreen');
      fullscreen.classList.add(`zoom-image-${index}`);
      fullscreen.classList.add('zoom');
      if ([4,5,6,12,22,23,25,27,30].includes(index)) {
        fullscreen.classList.add('square');
      }
    }
  }
};