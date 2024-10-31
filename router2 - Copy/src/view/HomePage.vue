<template>
<h1>Home Page</h1>
<div class="containerr">
<h3>Book Mark List</h3>
<button class="addBtn" @click="$router.push({name:'NewBookMark'})">+ Yeni element əlavə et</button>
<table id="customers">
  <tr>
    <th>#</th>
    <th>Başlıq</th>
    <th>URL</th>
    <th>Sil</th>
  </tr>
  <tr  v-for="i in 10" :key="i">
    <td>1</td>
    <td>V3 document</td>
    <td>http://v3.vuejs.org</td>
    <td><button class="deleteBtn">Sil</button></td>
  </tr>
</table>
</div>
</template>