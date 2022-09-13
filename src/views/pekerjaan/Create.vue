<template>
<div class="card-header bg-success text-white">Tambah Pekerjaan</div>
<div class="card-body">
    <div v-if="validation.errors" class="mt-2 alert alert-danger">
        <ul class="mt-0 mb-0">
            <li v-for="(error, index) in validation.errors" :key="index">{{ `${error.param} : ${error.msg}` }}</li>
        </ul>
    </div>
    <form @submit.prevent="store">
        <div class="form-group">
            <label for="title" class="font-weight-bold mb-2">Nama Pekerjaan</label>
            <input type="text" class="form-control" v-model="pekerjaan.nama" placeholder="Masukkan Nama">
        </div>
        <div class="form-group mt-3">
            <label for="content" class="font-weight-bold mb-2">Gaji</label>
            <textarea class="form-control" rows="4" v-model="pekerjaan.gaji" placeholder="Masukkan Gaji"></textarea>
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
        const pekerjaan = reactive({
            title: '',
            content: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let nama   = pekerjaan.nama
            let gaji = pekerjaan.gaji

            axios.post('http://localhost:5000/pekerjaan', {
                nama: nama,
                gaji: gaji
            }).then(() => {

                //redirect ke pekerjaan index
                alert("Data Berhasil Disimpan."),
                router.push({
                    name: 'pekerjaan.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            pekerjaan,
            validation,
            router,
            store
        }

    }

}
</script>

<style>

</style>