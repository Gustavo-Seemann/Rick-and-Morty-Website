<template>
  <div class="home">
    <section
      style="background-image: linear-gradient(to bottom, #ecebeb 96%, #dfdfdf 100%); padding-top: 50px; border-top: 3px solid rgb(0, 253, 97);"
    >
      <div
        class="container"
        style="max-width: 1920px;"
      >
        <div
          class="row"
          style="align-items: center; justify-content: center;"
        >
          <div class="col-auto">
            <img
              style="max-width: 500px;"
              src="@/assets/images/rickMorty.png"
            >
          </div>
          <div class="col-auto">
            <div style="max-width: 400px; text-align: left;">
              <h1
                style="background-image: linear-gradient(135deg, #00cfad 0%, #00c96b 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;"
              >
                Explore o Multiverso
              </h1>
              <p style="font-size: 20px;">
                Pesquise os personagens de uma das series animadas mais famosas do momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="background-color: rgb(255, 255, 255); padding-block: 100px; border-top: 3px solid rgb(0, 253, 97);">
      <div
        class="container"
        style="max-width: 1920px;"
      >
        <div style="display: flex; align-items: center; justify-content: center;">
          <div>
            <h2 style="font-weight: 900; color: rgb(12, 187, 120);">
              {{ charactersCount }}
            </h2>
            <h3 style="margin-inline: 10px;">
              Personagens
            </h3>
          </div>
          <div>
            <h2 style="font-weight: 900; color: rgb(12, 187, 120);">
              15
            </h2>
            <h3 style="margin-inline: 50px;">
              Planetas
            </h3>
          </div>
          <div>
            <h2 style="font-weight: 900; color: rgb(12, 187, 120);">
              145
            </h2>
            <h3 style="margin-inline: 10px;">
              Episódios
            </h3>
          </div>
        </div>
        <div class="d-flex justify-content-center m-5">
          <select
            style="max-width: 150px; margin-right: 20px; border-radius: 30px; background-color: rgb(243, 241, 241);"
            class="form-select"
            v-model="filterOption"
          >
            <option value="">
              Todos
            </option>
            <option value="alive">
              Alive
            </option>
            <option value="dead">
              Dead
            </option>
            <option value="unknown">
              Unknown
            </option>
          </select>
          <form
            class="d-flex w-100"
            style="max-width: 900px;"
          >
            <input
              class="form-control"
              type="search"
              placeholder="Pesquise um personagem..."
              aria-label="Pesquisar"
              v-model="searchQuery"
              style="border-color: rgb(211, 211, 211); border-radius: 50px 0 0 50px; background-color: rgb(243, 241, 241);"
            >
            <button
              class="btn btn-success px-3"
              type="submit"
              style="display: flex; border-radius: 0 50px 50px 0;"
            >
              <i class="bi bi-search" />
            </button>
          </form>
        </div>
        <!-- <div class="container"> -->
        <div
          class="row"
          style="justify-content: center; align-items: center;"
        >
          <CharacterCard
            v-for="character in allCharacters.results"
            :key="character.id"
            :character-info="character"
          />
        </div>
        <!-- </div> -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import CharacterCard from '@/components/CharacterCard.vue';

const allCharacters = ref([]);

const charactersCount = computed(() => allCharacters.value.info?.count);

const getAllCharacters= async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(response);
    allCharacters.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(getAllCharacters);
</script>

<style scoped>
  
  h1 {
    font-size: 80px;
    font-weight: 900;
  }

  section {
    width: 100%;
    height: 100%;
  }

</style>
