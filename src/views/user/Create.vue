<template>
<div class="card-header bg-success text-white">Tambah User</div>
<div class="card-body">
    <div v-if="validation.errors" class="mt-2 alert alert-danger">
        <ul class="mt-0 mb-0">
            <li v-for="(error, index) in validation.errors" :key="index">{{ `${error.param} : ${error.msg}` }}</li>
        </ul>
    </div>
    <form @submit.prevent="store">
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state posts
        const user = reactive({
            title: '',
            content: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let nama   = user.nama
            let alamat = user.alamat
            let jabatan = user.jabatan

            axios.post('http://localhost:5000/dietela', {
                nama: nama,
                alamat: alamat,
                jabatan: jabatan
            }).then(() => {

                //redirect ke user index
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
            store
        }

    }

}
</script>

<style>

</style>