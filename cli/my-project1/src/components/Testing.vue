<template>
	<div class="testing">
		<div class="row">
			<div class="col-md-8 my-5" v-for="(row,index) in posts" :key="index">
				<h4>{{row.post_title}}</h4>
				<p>{{row.post_content}}</p>

				<button class="btn-sm btn-dark mx-3" v-for="(tag,index) in row.post_tags" :key="index">{{tag.tag_name}}</button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">

import MyService from '@/services/MyService.js'

   export default{
    data(){
      return{
        posts:[]
      }
    },
    mounted(){ // auto working
      this.getPosts()
    },
    methods:{
      getPosts(){
        MyService.getPosts()
                .then(res => {
                  this.posts = res.data.posts
                })
                .catch(err=>{
                  console.error(err)
                })
      }
    }
  }
</script>
<style type="text/css">
	
</style>