<template>
  <div id="form-connexion">
   <vue-form :state="formstate" @submit.prevent="onSubmit">
       <button type="submit">Submit</button>
  </vue-form>
  </div>
</template>
