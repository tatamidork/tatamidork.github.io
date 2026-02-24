import MainHeader from 'components/MainHeader.js';

export default {
  template: /*html*/`
    <div class="portfolio container">
      <main-header
        title="Portfolio"
      >
      </main-header>
      <div class="items">
        <div v-for="i in 30" :key="i" @click="onSelect" class="art loading"></div>
      </div>
      <div @click="onSelect" class="fullscreen"></div>
      <div class="loading-message">loading...</div>
    </div>
  `,
  setup(props, ctx) {
    console.log('Portfolio component mounted');

    const intervalId = setInterval(() => {
      if (document.getElementById('loading').classList.contains('hidden')) {
        const items = document.querySelectorAll('.portfolio .art');
  
        for (const el of items) {
          el.classList.remove('loading');
        }
        document.querySelector('.portfolio .loading-message').classList.add('hidden');
        clearInterval(intervalId);
      }
    }, 100);
  },
  methods: {
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
  },
  components: {
    MainHeader,
  }
};