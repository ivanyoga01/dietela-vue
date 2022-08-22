<template>
<div class="card-header bg-success text-white">Data Semua User</div>
<div class="card-body">
    <router-link :to="{name: 'user.create'}" class="btn btn-md btn-success">TAMBAH USER</router-link>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <th>No</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jabatan</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ index +1 }}</td>
                    <td>{{ user.nama }}</td>
                    <td>{{ user.alamat }}</td>
                    <td>{{ user.jabatan }}</td>
                    <td><router-link :to="{name: 'user.edit', params:{id: user.id }}" class="btn btn-sm btn-primary me-2">EDIT</router-link></td>
                    <td><button @click.prevent="userDelete(user.id)" class="btn btn-sm btn-danger ml-1">DELETE</button></td>
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
        let users = ref([])

        //mounted
        onMounted(() => {

           //panggil function "getDataUser" 
           getDataUser()

        })

        //function "getDataPosts"
        function getDataUser() {

            //get API from Express Backend
            axios.get('http://localhost:5000/dietela')
            .then(response => {
              
              //assign state posts with response data
              users.value = response.data

            }).catch(error => {
                console.log(error.response.data)
            })
        }
        function userDelete(id) {

            //delete data post by ID
            axios.delete(`http://localhost:5000/dietela/${id}`)
            .then(() => {

                //panggil function "getDataPosts"  
                getDataUser()

            }).catch(error => {
                console.log(error.response.data)
            })
        }

        //return
        return {
            users,
            getDataUser,
            userDelete,
        }

    }

}
</script>

<style>

</style>