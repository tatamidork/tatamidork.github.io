export default {
  template: /*html*/`
    <div class="portfolio container">
      <div class="items">
        <div v-for="i in 30" :key="i" @click="onSelect" class="art loading"></div>
      </div>
      <div @click="onSelect" class="fullscreen"></div>
      <div class="loading-message">loading...</div>
    </div>
  `,
  setup(props, ctx) {
    // ctx.emit('submit');
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
    /*

        const items = document.querySelectorAll('.portfolio .art');

        const itemInfo = [
          { offset: 750 },
          { offset: 1200 },
          { name: "bass", offset: 500 },
          { offset: 600 },
          { offset: 300 },
          { offset: 500 },
          { offset: 1200 },
          { offset: 1100 },
          { offset: 500 },
          { name: "halloween", offset: 350 },
          { offset: 300 },
          { name: "kawaii",  offset: 300 },
          { offset: 950 },
          { offset: 380 },
          { offset: 350 },
          { offset: 1500 },
          { offset: 1600 },
          { offset: 1200 },
          { offset: 2000 },
          { offset: 600 },
          { name: "sping", offset: 1100 },
          { offset: 500 },
          { offset: 300 },
          { name: "travel", offset: 1200 },
          { offset: 320 },
          { offset: 850 },
          { name: "wind", offset: -50 },
          { offset: 1500 },
        ];
        let loaded = 0;
        for (const index in items) {
          const el = items[index];
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
            canvas.height = 540;
            canvas.width = myImage.naturalWidth;
            const offset = index < itemInfo.length ? itemInfo[index]["offset"] : 300;
            canvas.getContext('2d').drawImage(myImage, 0, -offset);
            const thumbnailImage = `url(${canvas.toDataURL()})`;
            el.style.backgroundImage = thumbnailImage;
            el.style.backgroundSize = 'cover';

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
      }*/
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
      // el.style.backgroundImage = el.__backup.thumbnailImage;
    },
    addZoom(el) {
      const parent = document.querySelector('.portfolio.container .items');
      const index = Array.prototype.indexOf.call(parent.children, el);
      const fullscreen = document.querySelector('.fullscreen');
      fullscreen.classList.add(`zoom-image-${index+1}`);
      fullscreen.classList.add('zoom');
      // el.style.backgroundImage = el.__backup.originalImage;
      el.scrollIntoView();
    }
  }
};