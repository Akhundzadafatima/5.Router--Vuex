<template>
  <div>
    <div v-if="getFilteredProduct.length === 0">Belə bir data yoxdur.</div>
    <div v-else></div>

    <div class="container">
      <ul>
        <li>
          {{ getFilteredProduct }}
        </li>
      </ul>
    </div>
  </div>

  <!-- <div class="container">
    <ul v-if="users.length > 0">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      id: "",
      users: [],
    };
  },

  mounted() {
    this.id = this.$route.params.id;
    this.fetchUsersNames();
  },
  methods: {
    async fetchUsersNames() {
      let data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          return data;
        });
      console.log(data);
      this.users = data;
    },
  },
  computed: {
    getFilteredProduct() {
      return this.users.filter((i) => i.id == this.id);
    },
  },
};
</script>
