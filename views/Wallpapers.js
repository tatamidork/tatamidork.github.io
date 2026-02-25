import { ref } from 'vue';
import { useRoute } from 'vue-router';

import MainHeader from 'components/MainHeader.js';
import template from 'templates/Wallpapers.js';
import data from 'data/Wallpapers.js';

const checkParameter = key => {
  if (key) {
    const item = data.find(o => o.key == key);
    if (item) {
      return item;
    }
  }

  return '';
};

export default {
  template,
  watch: {
    $route (to, from, next) {
      this.selected = checkParameter(to.params.wallpaper);
      next();
    }
  },
  setup(props, ctx) {
    console.log('Wallpapers component mounted');

    const price = ref(null);

    const route = useRoute();

    const selected = checkParameter(route.params.wallpaper);

    const intervalId = setInterval(() => {
      if (document.getElementById('loading').classList.contains('hidden')) {
        document.querySelector('.wallpapers .loading-message').classList.add('hidden');
        clearInterval(intervalId);
      }
    }, 100);

    return {
      selected,
      data,
      price,
    };
  },
  mounted() {
    window.addEventListener('keydown', this.handleGlobalEscape);
  },
  unmounted() {
    window.removeEventListener('keydown', this.handleGlobalEscape);
  },
  methods: {
    unselectItem() {
      this.selected = null;
      this.$router.push(`./`);
    },
    selectItem(key) {
      this.selected = data.find(o => o.key == key);
      this.$router.push(`./${key}`);
    },
    buyDownload() {
      if (typeof this.price === 'number') {
        if (this.price === 0) {

        }
      }
    },
    handleGlobalEscape(event) {
      if (event.key === 'Escape') {
        this.unselectItem();
      }
    },
    copyToClipboard({ target }) {
      navigator.clipboard.writeText('https://www.tatamidork.com.ar/#' + this.$route.fullPath);
      if (!target.classList.contains('copied')) {
        target.classList.add('copied');
        target.innerText = 'Copied!';
      }
    }
  },
  components: {
    MainHeader,
  }
};