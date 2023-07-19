<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">View Contact</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img :src="contact.picture" alt="" class="contact-img-big">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">ID: <span class="fw-bold">{{ contactId }}</span></li>
                    <li class="list-group-item">Name: <span class="fw-bold">{{contact.name}}</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold">{{contact.email}}</span></li>
                    <li class="list-group-item">Number: <span class="fw-bold">{{contact.contact}}</span></li>
                </ul>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <router-link to="/" class="btn btn-success"><i class="bi bi-arrow-left-circle"></i> Back</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import ContactService from '@/services/ContactService';

export default{
    name: "ViewContact",
    data: function(){
        return{
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {},
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
    }
}

</script>

<style>

</style>