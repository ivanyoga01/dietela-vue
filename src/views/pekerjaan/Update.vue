<template>
<div class="card-header bg-success text-white">Edit User</div>
<div class="card-body">
    <div v-if="validation.errors" class="mt-2 alert alert-danger">
        <ul class="mt-0 mb-0">
            <li v-for="(error, index) in validation.errors" :key="index">{{ `${error.param} : ${error.msg}` }}</li>
        </ul>
    </div>
    <form @submit.prevent="update">
        <div class="form-group">
            <label for="title" class="font-weight-bold mb-2">Nama</label>
            <input type="text" class="form-control" v-model="user.nama" placeholder="Masukkan Nama">
        </div>
        <div class="form-group mt-3">
            <label for="content" class="font-weight-bold mb-2">Alamat</label>
            <textarea class="form-control" rows="4" v-model="user.alamat" placeholder="Masukkan Alamat"></textarea>
        </div>
        <div class="form-group mt-3">
            <label for="content" class="font-weight-bold mb-2">Jabatan</label>
            <input type="text" class="form-control" v-model="user.jabatan" placeholder="Masukkan Jabatan">
        </div>
        <button type="submit" class="btn btn-primary mt-3">SIMPAN</button>
    </form>    
</div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state posts
        const user = reactive({
            nama: '',
            alamat: '',
            jabatan: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        //mounted
        onMounted(() => {

            //get API from Backend
            axios.get(`http://localhost:5000/dietela/${route.params.id}`)
            .then(response => {
              
              //assign state posts with response data
              user.nama    = response.data.nama  
              user.alamat  = response.data.alamat
              user.jabatan    = response.data.jabatan  

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let nama   = user.nama
            let alamat = user.alamat
            let jabatan = user.jabatan

            axios.put(`http://localhost:5000/dietela/${route.params.id}`, {
                nama: nama,
                alamat: alamat,
                jabatan: jabatan
            }).then(() => {

                //redirect ke post index
                router.push({
                    name: 'user.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            user,
            validation,
            router,
            update
        }

    }

}
</script>

<style>

</style>