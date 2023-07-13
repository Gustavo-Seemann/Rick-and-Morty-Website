<template>
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="width: 50px;" />
    <div style="flex: 1; text-align: center;">
      <img
        style="max-width: 150px; display: inline-block;"
        src="@/assets/images/rickMortyLogo.png"
      >
    </div>
    <div>
      <img
        style="
          width: 40px; 
          height: 40px; 
          border-radius: 50%; 
          object-fit: cover; 
          margin: 10px;
          border: 1px solid rgb(94, 94, 94);"
        src="@/assets/images/pt_BR.png"
      >
    </div>
  </div>
</template>

<script>

export default  {
  name: "NavBar",
  data() {
    return {
            
    };
  }
};

</script>