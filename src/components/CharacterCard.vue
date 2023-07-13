<template>
  <div class="container">
    <div class="row character-card">
      <div class="col">
        <img
          class="character-image"
          src="https://rickandmortyapi.com/api/character/avatar/232.jpeg"
        >
      </div>
      <div class="col character-info">
        <div>
          <div style="max-width: 280px; max-height: 80px;">
            <h1>
              Morphizer-XE Customer Support
            </h1>
          </div>
          <div>
            <p
              class="text-uppercase"
              style="color: rgb(6, 211, 6); font-weight: bold;"
            >
              Alive
            </p>
          </div>
          <div class="form-group">
            <label
              style="font-size: 13px; color: rgb(117, 117, 117);"
              for="exampleFormControlFile4"
            >Species</label>
            <p
              style="font-weight: 500;"
              id="exampleFormControlFile4"
            >
              Human
            </p>
          </div>
          <div class="form-group">
            <label
              style="font-size: 13px; color: rgb(117, 117, 117);"
              for="exampleFormControlFile1"
            >Last Know Location</label>
            <p
              style="font-weight: 500;"
              id="exampleFormControlFile1"
            >
              Earth (Replacement Dimension)
            </p>
          </div>
          <div class="form-group">
            <label
              style="font-size: 13px; color: rgb(117, 117, 117);"
              for="exampleFormControlFile12"
            >First Seen in</label>
            <p
              style="font-weight: 500;"
            
              id="exampleFormControlFile12"
            >
              the whirly dirly conspiracy
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CharacterCard",
  data() {
    return {
            
    };
  }
};

</script>

<style scoped>

p {
  margin: 0;
}

.character-card {
    width: 100%;
    height: 100%;
}

.container {
    max-width: 600px;
    height: 280px;
    padding: 0;
    margin: 20px;
    /* background-image: linear-gradient(135deg, #2bf37e 0%, #5bffbb 100%); */
    background-color:  rgb(240, 240, 240);
    box-shadow: 0px 1px 5px rgb(167, 167, 167);
    /* border: 1px solid rgb(230, 230, 230); */
    color: rgb(0, 58, 17);
    border-radius: 20px;
    overflow: hidden;
}
.character-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.character-info {
    text-align: left;
    align-items: center;
    display: flex;
}

h1 {
    font-weight: bold;
    font-size: 27px;
}

.col {
    overflow: hidden;
}

</style>