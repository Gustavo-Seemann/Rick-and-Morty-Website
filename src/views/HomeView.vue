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
              class="rickmorty-img"
              src="@/assets/images/rickMorty.png"
            >
          </div>
          <div class="col-auto titleDiv">
            <div style="max-width: 400px; text-align: left;">
              <h1
                style="background-image: linear-gradient(135deg, #00cfad 0%, #00c96b 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;"
              >
                Explore o Multiverso
              </h1>
              <p class="subtitle">
                Pesquise os personagens de uma das series animadas mais famosas do momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="charactersSection">
      <div
        class="container"
        style="max-width: 1920px;"
      >
        <div style="display: flex; justify-content: center; align-items: center;">
          <div
            class="row"
            style="max-width: 800px;"
          >
            <div class="col">
              <h2 style="font-weight: 900; color: rgb(12, 187, 120);">
                {{ charactersCount }}
              </h2>
              <h3 style="margin-inline: 10px;">
                Personagens
              </h3>
            </div>
            <div class="col">
              <h2 style="font-weight: 900; color: rgb(12, 187, 120);">
                {{ locationsCount }}
              </h2>
              <h3 style="margin-inline: 50px;">
                Planetas
              </h3>
            </div>
            <div class="col">
              <h2 style="font-weight: 900; color: rgb(12, 187, 120);">
                {{ episodesCount }}
              </h2>
              <h3 style="margin-inline: 10px;">
                Episódios
              </h3>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center m-5">
          <select
            style="max-width: 150px; margin-right: 20px; border-radius: 30px; background-color: rgb(243, 241, 241);"
            class="form-select"
            v-model="filterOption"
          >
            <option
              v-for="option in filterOptions"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <div
            class="d-flex w-100"
            style="max-width: 900px;"
          >
            <input
              @input="inputSearch"
              class="form-control"
              type="search"
              placeholder="Pesquise um personagem..."
              aria-label="Pesquisar"
              v-model="searchQuery"
              style="border-color: rgb(211, 211, 211); border-radius: 50px 0 0 50px; background-color: rgb(243, 241, 241);"
            >
            <button
              class="btn px-3"
              @click="searchCharacters"
              style="display: flex; border-radius: 0 50px 50px 0; background-color: rgb(243, 241, 241)"
            >
              <span
                v-if="isLoading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              <i
                v-else
                class="bi bi-search"
              />
            </button>
          </div>
        </div>
        <div
          class="row"
          style="justify-content: center; align-items: center;"
        >
          <div
            v-if="!noResults"
            class="pagination"
          >
            <button
              @click="previousPage"
              :disabled="currentPage === 1"
              class="pagination-btn"
            >
              <i class="bi bi-chevron-left" />
            </button>
            <div class="pagination-info">
              Página {{ currentPage }} de {{ totalPages }}
            </div>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="pagination-btn"
            >
              <i class="bi bi-chevron-right" />
            </button>
          </div>
          <CharacterCard
            v-for="character in allCharacters.results"
            :key="character.id"
            :character-info="character"
          />

          <div
            v-if="noResults"
            class="text-center my-3"
          >
            <h3><strong>Nenhum resultado encontrado.</strong></h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import CharacterCard from '@/components/CharacterCard.vue';

const allCharacters = ref([]);
const currentPage = ref(1);
const searchQuery = ref('');
const filterOption = ref('');
const charactersCount = ref(0);
const episodesCount = ref(0);
const locationsCount = ref(0);

const isLoading = ref(false);

const noResults = computed(() => allCharacters.value.length === 0);

const totalPages = computed(() =>
  Math.ceil(allCharacters.value.info?.pages)
);

const filterOptions = [
  { label: 'Todos', value: '' },
  { label: 'Vivo', value: 'alive' },
  { label: 'Morto', value: 'dead' },
  { label: 'Desconhecido', value: 'unknown' },
];

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    getAllCharacters();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    getAllCharacters();
  }
};


watch(() => filterOption.value, () => {
  currentPage.value = 1;
  searchCharacters();
});

const getAllCharacters = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${currentPage.value}&name=${searchQuery.value}&status=${filterOption.value}`
    );
    allCharacters.value = response.data;
  } catch (error) {
    allCharacters.value = [];
  }
  isLoading.value = false;

};

const updateStatusInfo = async () => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character`
    );
    charactersCount.value = response.data.info.count;
  } catch (error) {
    console.log(error);
  }
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location`
    );
    locationsCount.value = response.data.info.count;
  } catch (error) {
    console.log(error);
  }
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode`
    );
    episodesCount.value = response.data.info.count;
  } catch (error) {
    console.log(error);
  }
};

const searchCharacters = async () => {
  isLoading.value = true;
  currentPage.value = 1;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${currentPage.value}&name=${searchQuery.value}&status=${filterOption.value}`
    );
    allCharacters.value = response.data;
  } catch {
    allCharacters.value = [];
  }
  isLoading.value = false;

};

let searchTimeout = null;

const inputSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(searchCharacters, 1000);
};

onMounted(() => {
  updateStatusInfo();
  getAllCharacters();
});

</script>

<style scoped>
  
  h1 {
    font-size: 80px;
    font-weight: 900;
  }

  .subtitle {
    font-size: 20px;
  }

  section {
    width: 100%;
    height: 100%;
  }

  .charactersSection {
    padding-block: 50px; 
    border-top: 3px solid rgb(0, 253, 97);
  }


  .pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination-btn {
  padding: 8px;
  font-size: 16px;
  border: none;
  background-color: rgb(12, 187, 120);
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-btn:hover {
  background-color: rgb(0, 160, 110);
}

.pagination-btn:disabled {
  background-color: rgb(211, 211, 211);
  cursor: not-allowed;
}

.pagination-info {
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .rickmorty-img {
    max-width: 300px;
  }

  h1 {
    font-size: 34px;
    text-align: center;
  }

  .subtitle {
    font-size: 16px;
    text-align: center;
  }
}

</style>
