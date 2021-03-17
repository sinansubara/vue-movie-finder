<template>
  <v-app id="inspire">

<v-navigation-drawer
        v-model="drawer"
        bottom
        temporary
        app
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Movies App
          </v-list-item-title>
          <v-list-item-subtitle>
            © Sinan Šubara
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>

    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Movies and TV Shows Vuewer</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      
    </v-app-bar>
    
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    items: [
          { title: 'Popular', icon: 'mdi-movie-open-star', to: '/' },
          { title: 'Movies', icon: 'mdi-movie-roll', to: '/movies' },
          { title: 'TV Series', icon: 'mdi-filmstrip-box-multiple', to: '/series' }
        ],
        right: null,
        drawer: false
  })
};
</script>
