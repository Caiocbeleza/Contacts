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
                <form>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Contact">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Picture URL">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Save">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="" class="contact-img">
            </div>
        </div>
    </div>
</template>
      
    <script>
    export default{
        name: "EditContact"
    }
    
    </script>
    
    <style>
    
    </style>