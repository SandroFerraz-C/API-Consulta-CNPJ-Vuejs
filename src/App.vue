<template>
  <div  id="app">
            <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logo do Vue">

    <div class="container grid-xs">
        
        <form onsubmit="searchCnpj()" method="POST">
          <div >

          <h2>Consultar CNPJ</h2>

            <div class="form-group">
              <div >
                <label class="form-label">CNPJ:</label>
                <input class="form-input" type="text" v-mask="'##.###.###/####-##'"  v-model="cnpj"   autofocus v-on:change="checkCnpj">
                <button class="btn-consultar" v-on:click="addCnpj">Consultar</button>
              </div>
            </div>

              <div class="form-group">
                <div >
                  <label class="form-label">Razão Social:</label>
                  <input class="form-input" type="text" id="razaoSocial" >
                </div>

                <div>
                  <label class="form-label">Nome Fantasia:</label>
                  <input class="form-input" type="text" id="fantasia">
                </div>
             </div>

      <div class="form-group">
        <div >
          <label class="form-label">Logradouro:</label>
          <input class="form-input"  type="text" id="logradouro">
        </div>

        <div>
          <label class="form-label">Número:</label>
          <input class="form-input" type="text" id="numero" >
        </div>
      </div>

      <div class="form-group">
        <div>
          <label class="form-label">Municipio:</label>
          <input class="form-input" type="text" id="municipio">
        </div>

        <div>
          <label class="form-label">UF:</label>
          <input class="form-input" type="text" id="uf">
        </div>
      </div>
    </div>
  
    </form>
    </div>
  </div>
  
</template>

<script>
  import * as CompanyService from './components/company/companyService';
  export default {
    name: 'App',
    data(){
      return {
        cnpj:""
      };
    },
    methods:{
      addCnpj: event => CompanyService.addCnpj(event),
      checkCnpj: event =>  CompanyService.checkCnpj(event)
    }
  }
</script>

<style scoped>

  @import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400");
*,
*::after,
*::before {
    box-sizing: border-box;
}

#app {
    color: #fff;
    background: #949c4e;
    background: linear-gradient( 115deg, rgba(86, 216, 228, 1) 10%, rgba(159, 1, 234, 1) 90%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html
.container {
    min-height: 100vh;
}

.img-responsive{
  max-width: 40px;
    margin-bottom: -60px
}

 h2 {
    text-align: center;
    margin: 5%;
}

.btn-consultar{
  border-radius: 10px;
  background: linear-gradient( 90deg, rgb(86, 95, 228) 10%, rgb(129, 1, 234) 90%);
  border:none;
  margin-top:10px;
  opacity: .6;
}

.btn-consultar:hover{
  opacity: 1;
  cursor:pointer;
}
@-webkit-keyframes cd-bounce {
    0%,
    100% {
        -webkit-transform: scale(1);
    }
    50% {
        -webkit-transform: scale(0.8);
    }
}

@-moz-keyframes cd-bounce {
    0%,
    100% {
        -moz-transform: scale(1);
    }
    50% {
        -moz-transform: scale(0.8);
    }
}

@keyframes cd-bounce {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.8);
    }
}
</style>
