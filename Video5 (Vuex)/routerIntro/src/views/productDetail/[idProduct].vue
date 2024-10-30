<template>
 <div>
    id ni goster : {{ id }}
    <br>

    <div v-if="getFilteredProduct.length == 0 ">
        bele data yoxdu cix get
    </div>
    <div v-else>
        {{ getFilteredProduct }}
    </div>
 </div>
</template>

<script>
export default{
    data(){
        return{
            id:"",
        
            products:[
                {id:1,name:"alma",price:5},
                {id:2,name:"armud",price:6},
                {id:3,name:"banan",price:7},
                {id:4,name:"findiq",price:8},
            ]
        }
    },
    mounted(){
        // console.log("query",this.$route.params)
        this.id=this.$route.params.id


    },
    computed:{
       getFilteredProduct(){
          return this.products.filter(i=>i.id==this.id)
       }
    }
}
</script>