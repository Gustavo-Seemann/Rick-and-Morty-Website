<template>
  <div class="container">
    <div class="row character-card">
      <div class="col">
        <img
          class="character-image"
          :src="characterInfo.image"
        >
      </div>
      <div class="col character-info">
        <div>
          <div style="max-width: 280px; max-height: 80px;">
            <h1>
              {{ characterInfo.name }}
            </h1>
          </div>
          <div>
            <p
              class="text-uppercase infoText"
              :class="getStatusColorClass(characterInfo.status)"
            >
              {{ getStatusTranslated(characterInfo.status) }}
            </p>
          </div>
          <div class="form-group">
            <label
              style="font-size: 13px; color: rgb(117, 117, 117);"
              for="exampleFormControlFile4"
            >Espécies</label>
            <p
              style="font-weight: 500;"
              class="infoText"
              id="exampleFormControlFile4"
            >
              {{ characterInfo.species }}
            </p>
          </div>
          <div class="form-group">
            <label
              style="font-size: 13px; color: rgb(117, 117, 117);"
              for="exampleFormControlFile1"
            >Última localização conhecida</label>
            <p
              style="font-weight: 500;"
              class="infoText"
              id="exampleFormControlFile1"
            >
              {{ characterInfo.location["name"] }}
            </p>
          </div>
          <div class="form-group">
            <label
              style="font-size: 13px; color: rgb(117, 117, 117);"
              for="exampleFormControlFile12"
            >Visto pela primeira vez em</label>
            <p
              style="font-weight: 500;"
              class="infoText"
              id="exampleFormControlFile12"
            >
              {{ firstEpisodeName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
  characterInfo: {
    type: Object,
    default: null
  }
});

const firstEpisodeName = ref(null);

const getFirstEpisodeSeenName = async () => {
  try {
    const firstEpisode = await axios.get(props.characterInfo.episode[0]);
    firstEpisodeName.value = firstEpisode.data.name;
  } catch (error) {
    console.error(error);
  }
};

onMounted(getFirstEpisodeSeenName);

const getStatusColorClass = (status) => {
  if (status === "Alive") {
    return "status-alive";
  } else if (status === "Dead") {
    return "status-dead";
  } else {
    return "status-unknown";
  }
};

const getStatusTranslated = (status) => {
  if (status === "Alive") {
    return "Vivo";
  } else if (status === "Dead") {
    return "Morto";
  } else {
    return "Desconhecido";
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
    max-height: 280px;
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

.status-alive {
  color: rgb(0, 209, 0);
  font-weight: bold;
}

.status-dead {
  color: rgb(231, 0, 0);
  font-weight: bold;
}

.status-unknown {
  color: rgb(161, 161, 161);
  font-weight: bold;
}

@media (max-width: 768px) {

  h1 {
    font-size: 20px;
  }

  .infoText {
    font-size: 13px;
  }

}


</style>