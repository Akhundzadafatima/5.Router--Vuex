<template>
    <div class="container">
    <ul v-if="users.length>0">
      <li v-for="user in users" :key="user">
        <router-link :to="{path:'/detail/'+user.id}" >{{ user.name }}</router-link></li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      users: [],
    };
  },

  mounted() {
    this.fetchUsersNames();
  },
  methods: {
    async fetchUsersNames() {
     let data= await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          return data
        });
        console.log(data);
        this.users=data
    },
  },
};
</script>
