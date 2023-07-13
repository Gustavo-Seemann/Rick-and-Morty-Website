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
              430
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
        <div
          class="row"
        >
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterCard from '@/components/CharacterCard.vue';

export default {
  name: "HomeView",
  components: {
    CharacterCard,
  },
};
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
