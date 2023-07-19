<template>
    <div class="container mt-3">
import SpinnerLoad from "@/components/SpinnerLoad.vue";
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Contact Manager
                    <router-link to="/contacts/add" class="btn btn-success btn-sm">New</router-link>
                </p>
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col">
                                <input type="text" class="form-control" placeholder="Search Name">
                                </div>
                                <div class="col">
                                    <input type="submit" class="btn btn-outline-dark">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Spinner -->
    <div v-if="loading">
        <div class="container">
            <div class="row">
                <div class="col">
                    <SpinnerLoad/>
                </div>
            </div>
        </div>
    </div>

    <!-- Error Message -->
    <div v-if="!loading && errorMenssage">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h4 text-danger fw-bold">{{ errorMenssage }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3" v-if="contacts.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key="contact">
                <div class="card my-2 list-group-item list-group-item-action list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <img :src="contact.picture" alt="" class="contact-img">
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name: <span class="fw-bold">{{contact.name}}</span></li>
                                    <li class="list-group-item">Email: <span class="fw-bold">{{contact.email}}</span></li>
                                    <li class="list-group-item">Number: <span class="fw-bold">{{contact.contact}}</span></li>
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                <router-link to="/contacts/view/:contactId" class="btn btn-warning my-1">
                                    <i class="bi bi-eye-fill"></i>
                                </router-link>
                                <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1">
                                    <i class="bi bi-pen"></i>
                                </router-link>
                                <button class="btn btn-danger my-1">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import ContactService from "../services/ContactService";
import SpinnerLoad from "@/components/SpinnerLoad.vue";
export default{
    name: "ContactManager",
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMenssage: null,
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getAllContacts();
            this.contacts = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMenssage = error;
            this.loading = false;
        }
    },
    methods: {},
    components: { SpinnerLoad }
}

</script>

<style>

</style>