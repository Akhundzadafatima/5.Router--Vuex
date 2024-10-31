<template>
  <h1>Person Page</h1>

  <div class="containerPerson">
    <h3>Book Mark List</h3>
    <div class="total">
      <div class="section">
        <label>Başlıq daxil edin:</label>
        <input placeholder="Title" v-model="userData.title" />
      </div>
      <div class="section">
        <label>Link daxil edin:</label>
        <input placeholder="https://..." v-model="userData.url" />
      </div>
      <div class="section">
        <label>Açıqlama daxil edin:</label>
        <input
          class="detailInp"
          placeholder="İzah edən cümlələr yazın..."
          v-model="userData.description"
        />
      </div>
      <div class="buttons">
        <button class="cancelBtn" @click="$router.push({ name: 'Home' })">
          Ləğv et
        </button>
        <button class="saveBtn" @click="onSave">Saxla</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$axios
        .post("http://localhost:3000/bookmarks", this.userData)
        .then((save_response) => {
          console.log(save_response);
        });
    },
  },
};
</script>
