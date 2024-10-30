<template>
  <h1>Home Page</h1>
  <router-link to="/"></router-link>
  <ProductsList/>
</template>
<script>

import ProductsList from '@/components/ProductsList.vue';

export default{
components:{
    ProductsList
}

}
</script>