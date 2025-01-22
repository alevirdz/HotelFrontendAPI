<template>
    <v-footer v-if="show" app>
      <v-container>
        <v-row>
          <v-col class="text-center">
            <span>
              Copyright © {{ currentYear }} 
              <a href="#!" target="_blank">{{ authorName }}</a>. All rights reserved.
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    props: {
      show: {
        type: Boolean,
        default: true
      },
      authorName: {
        type: String,
        default: 'Alevi Rodriguez'
      }
    },
    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
    }
  };
  </script>

  