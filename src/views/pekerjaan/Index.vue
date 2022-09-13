<template>
<div class="card-header bg-success text-white">Data Semua Pekerjaan</div>
<div class="card-body">
    <router-link :to="{name: 'pekerjaan.create'}" class="btn btn-md btn-success">TAMBAH PEKERJAAN</router-link>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <th>No</th>
                <th>Nama Pekerjaan</th>
                <th>Gaji</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(pekerjaan, index) in pekerjaans" :key="index">
                    <td>{{ index +1 }}</td>
                    <td>{{ pekerjaan.nama }}</td>
                    <td>{{ pekerjaan.gaji }}</td>
                    <td><router-link :to="{name: 'pekerjaan.edit', params:{id: pekerjaan.id }}" class="btn btn-sm btn-primary me-2">EDIT</router-link></td>
                    <td><button @click.prevent="pekerjaanDelete(pekerjaan.id)" class="btn btn-sm btn-danger ml-1">DELETE</button></td>
                </tr>
            </tbody>
        </table>
    </div>   
</div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {

    setup() {

        //reactive state
        let pekerjaans = ref([])

        //mounted
        onMounted(() => {

           //panggil function "getDataPekerjaan" 
           getDataPekerjaan()

        })

        //function "getDataPosts"
        function getDataPekerjaan() {

            //get API from Express Backend
            axios.get('http://localhost:5000/pekerjaan')
            .then(response => {
              
              //assign state posts with response data
              pekerjaans.value = response.data

            }).catch(error => {
                console.log(error.response.data)
            })
        }
        function pekerjaanDelete(id) {

            //delete data post by ID
            axios.delete(`http://localhost:5000/pekerjaan/${id}`)
            .then(() => {

                //panggil function "getDataPosts"  
                getDataPekerjaan()

            }).catch(error => {
                console.log(error.response.data)
            })
        }

        //return
        return {
            pekerjaans,
            getDataPekerjaan,
            pekerjaanDelete,
        }

    }

}
</script>

<style>

</style>