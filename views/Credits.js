import MainHeader from 'components/MainHeader.js';

export default {
  template: /*html*/`
    <div class="credits container">
      <main-header
        title="Credits"
      >
      </main-header>
      
      <div class="developer-credit">
        <div class="info">
          Website created<br>
          by Mart&iacute;n Farias
        </div>
        <div class="icon"></div>
      </div>

      <div class="links">
        <div>My links:</div>
        <a href="https://www.linkedin.com/in/fariasmartinpixel/" target="_blank" rel="noopener noreferrer">> LinkedIn <</a>
      </div>
      <div class="loading-message">loading...</div>
    </div>
  `,
  setup(props, ctx) {
    console.log('Credits component mounted');

    const intervalId = setInterval(() => {
      if (document.getElementById('loading').classList.contains('hidden')) {
        const items = document.querySelectorAll('.credits .art');
  
        for (const el of items) {
          el.classList.remove('loading');
        }
        document.querySelector('.credits .loading-message').classList.add('hidden');
        clearInterval(intervalId);
      }
    }, 100);
  },
  components: {
    MainHeader,
  }
};