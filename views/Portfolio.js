export default {
  template: /*html*/`
    <div class="portfolio container">
      <div v-for="i in 28" :key="i" @click="onSelect" class="art loading"></div>
      <div class="loading-message">loading...</div>
    </div>
  `,
  setup(props, ctx) {
    // ctx.emit('submit');
    console.log('Portfolio component mounted');

    const intervalId = setInterval(() => {
      if (document.getElementById('loading').classList.contains('hidden')) {
        clearInterval(intervalId);

        const items = document.querySelectorAll('.portfolio .art');

        let loaded = 0;
        for (const el of items) {
          const comp = window.getComputedStyle(el);
          const imgSrc = comp.getPropertyValue('background-image');

          const height = parseInt(comp.getPropertyValue('height'));
          const width = parseInt(comp.getPropertyValue('width'));

          const myImage = new Image();
          myImage.src = imgSrc.substring(5, imgSrc.length-2);
          // myImage.height = height;
          // myImage.width = width;

          const canvas = document.createElement('canvas');
          // canvas.setAttribute('height', height);
          // canvas.setAttribute('width', width);

          myImage.onload = function() {
            canvas.height = 350;
            canvas.width = myImage.naturalWidth;
            canvas.getContext('2d').drawImage(myImage, 0, 0);
            const thumbnailImage = `url(${canvas.toDataURL()})`;
            el.style.backgroundImage = thumbnailImage;
            el.style.backgroundSize = 'contain';

            el.__backup = {
              originalImage: imgSrc,
              thumbnailImage: thumbnailImage
            };

            loaded++;
            if (items.length == loaded) {
              
              for (const el of items) {
                el.classList.remove('loading');
              }
              document.querySelector('.portfolio .loading-message').classList.add('hidden');
            }
          };
        }
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
    removeZoom(el) {
      el.classList.remove('zoom');
      el.style.backgroundImage = el.__backup.thumbnailImage;
    },
    addZoom(el) {
      el.classList.add('zoom');
      el.style.backgroundImage = el.__backup.originalImage;
    }
  }
};