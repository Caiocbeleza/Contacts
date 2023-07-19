<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Contact</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="editContact()">
                    <div class="mb-2">
                        <input v-model="contact.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.contact" type="number" class="form-control" placeholder="Contact">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.picture" type="text" class="form-control" placeholder="Picture URL">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Save">
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
        name: "EditContact",
        data: function(){
            return{
                contactId: this.$route.params.contactId,
                loading: false,
                contact: {
                    name: '',
                    contact: '',
                    email: '',
                    picture: ''
                },
                errorMenssage: null
            }
        },
        created: async function(){
            try {
                this.loading = true;
                let response = await ContactService.getContact(this.contactId);
                this.contact = response.data;
                this.loading = false;
                
            } catch (error) {
                this.errorMenssage = error;
                this.loading = false;
                
            }
        },
        methods:{
           async editContact(){
            try {
                    let response = await ContactService.updateContact(this.contact, this.contactId);
                    if(response){
                        return this.$router.push('/');
                    }
                    else{
                        return this.$router.push(`/contacts/edit/${this.contactId}`);
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