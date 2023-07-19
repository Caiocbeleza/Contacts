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
                <img src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="" class="contact-img-big">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">ID: <span class="fw-bold">ID</span></li>
                    <li class="list-group-item">Name: <span class="fw-bold">Name</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold">Email</span></li>
                    <li class="list-group-item">Number: <span class="fw-bold">Number</span></li>
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
export default{
    name: "ViewContact"
}

</script>

<style>

</style>