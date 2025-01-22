<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4" v-for="stat in statistics" :key="stat.title">
          <v-card :color="stat.color" class="mx-2 my-2" elevation="2">
            <v-card-title class="headline">{{ stat.title }}</v-card-title>
            <v-card-subtitle>{{ stat.value }}</v-card-subtitle>
            <v-card-text>{{ stat.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <v-card class="mt-4">
        <v-card-title>
          <span class="headline">Recent Tickets</span>
        </v-card-title>
        <v-data-table :headers="ticketHeaders" :items="tickets" item-key="trackingId" class="elevation-1">
          <template v-slot:items="{ item }">
            <tr>
              <td>
                <v-avatar>
                  <img :src="item.assigneeImg" alt="Assignee" />
                </v-avatar>
                {{ item.assignee }}
              </td>
              <td>{{ item.subject }}</td>
              <td>
                <v-chip :color="item.statusColor" dark>{{ item.status }}</v-chip>
              </td>
              <td>{{ item.lastUpdate }}</td>
              <td>{{ item.trackingId }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Dashboard-Module',
    data() {
      return {
        sidebar: true,
        menuItems: [
          { icon: 'mdi-cached', text: 'Activity Log' },
          { icon: 'mdi-logout', text: 'Signout' },
        ],
        sidebarItems: [
        {
            title: 'Dashboard',
            icon: 'mdi-home',
            route: '/dashboard',
            expanded: false,
          },
          { title: 'Catálogo', route: '/admin/catalog', icon: 'mdi-book' },
          { title: 'Clientes', route: '/admin/customers', icon: 'mdi-account-badge' },
          { title: 'Productos', route: '/admin/products', icon: 'mdi-box' },
          {
            title: 'Users',
            icon: 'mdi-group',
            route: '/users',
            expanded: false,
            subItems: [
              { title: 'User List', route: '/users/list' },
              { title: 'User Roles', route: '/users/roles' },
            ],
          },
          {
            title: 'Projects',
            icon: 'mdi-folder-shared',
            route: '/projects',
            expanded: false,
          },
          {
            title: 'Payments',
            icon: 'mdi-credit-card',
            route: '/payments',
            expanded: false,
            subItems: [
              { title: 'Invoices', route: '/payments/invoices' },
              { title: 'Transactions', route: '/payments/transactions' },
            ],
          },
          {
            title: 'Auth',
            icon: 'mdi-login',
            route: '/auth',
            expanded: false,
          },
          {
            title: 'FAQ',
            icon: 'mdi-help',
            route: '/faq',
            expanded: false,
          },
        ],
        statistics: [
          { title: 'Weekly Sales', value: '$15,000', description: 'Increased by 60%', color: '#e3f2fd' },
          { title: 'Weekly Orders', value: '45,634', description: 'Decreased by 10%', color: '#c8e6c9' },
          { title: 'Visitors Online', value: '95,574', description: 'Increased by 5%', color: '#fff9c4' },
        ],
        ticketHeaders: [
          { text: 'Assignee', value: 'assignee' },
          { text: 'Subject', value: 'subject' },
          { text: 'Status', value: 'status' },
          { text: 'Last Update', value: 'lastUpdate' },
          { text: 'Tracking ID', value: 'trackingId' },
        ],
        tickets: [
          { assignee: 'David Grey', assigneeImg: 'assets/images/faces/face1.jpg', subject: 'Fund is not received', status: 'DONE', statusColor: 'green', lastUpdate: 'Dec 5, 2017', trackingId: 'WD-12345' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos aquí */
  </style>