<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Add Contact</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
                    <div class="mb-2">
                        <input required v-model="contact.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.contact" type="number" class="form-control" placeholder="Contact">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.picture" type="text" class="form-control" placeholder="Picture URL">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Create">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contact.picture" alt="" class="contact-img">
            </div>
        </div>
    </div>
</template>
      
<script>
import ContactService from '@/services/ContactService';

    export default{
        name: "AddContact",
        data: function(){
            return{
                contact: {
                    name: '',
                    contact: '',
                    email: '',
                    picture: ''
                }

            }
        },
        methods: {
            submitCreate: async function(){
                try {
                    let response = await ContactService.createContact(this.contact);
                    if(response){
                        return this.$router.push('/');
                    }
                    else{
                        return this.$router.push('/contacts/add');
                    }
                } catch (error) {
                    console.log(error);                    
                }
            }
        } 
    }
    
</script>

<style>

</style>