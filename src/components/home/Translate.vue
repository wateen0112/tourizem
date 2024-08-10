<template>
    <div id="google_translate_element"></div>
  </template>
  
  <script>
  export default {
    name: 'GoogleTranslate',
    mounted() {
      this.loadGoogleTranslate();
    },
    methods: {
      loadGoogleTranslate() {
        if (typeof google !== 'undefined' && google.translate && google.translate.TranslateElement) {
          this.initializeGoogleTranslate();
        } else {
          window.googleTranslateElementInit = this.initializeGoogleTranslate;
        }
      },
      initializeGoogleTranslate() {
        new google.translate.TranslateElement({
          pageLanguage: 'en', // Change this to the default language of your website
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
    }
  };
  </script>
  
  <style >

.goog-te-gadget-simple{
    display: flex !important;
    padding-top: 2px !important;
    max-height:  24px !important;
    min-width: 120px  !important;
    overflow: hidden !important;
}

  .goog-te-gadget-icon{
  
  }

  </style>
  