<template lang="pug">
  div
    v-layout
      v-flex(xs6)
        v-text-field(
        v-model="search",
        append-icon="search",
        single-line hide-details label="曲名検索")
      v-flex(xs6)
        v-select(
        :items="items"
        v-model="difficultySelected"
        label="難易度"
        item-value="text")
    v-data-table(:headers = "headers", fluid
    :items = "songs",
    :search="search",
    :custom-sort="sort",
    :pagination.sync="pagination")
      template(slot="items" scope="props")
        tr( :class="typeColor(props.item.type)" v-if="difficulty(props.item, difficultySelected)")
          td
            router-link(:to="'/songs/'+ encodeURIComponent(props.item.title)" ).caption.nowrap {{props.item.title}}
          td.caption.nowrap {{props.item.type}}
          td(align="right")  {{difficulty(props.item, difficultySelected).level}}
          td(align="right")  {{difficulty(props.item, difficultySelected).density}}
          td(align="right")  {{difficulty(props.item, difficultySelected).notes}}
          td(align="right")  {{props.item.bpm}}
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data: () => ({
      headers: [
        { text: 'title', align: 'left', value: 'title' },
        { text: 'type', align: 'left', value: 'type' },
        { text: 'level', align: 'right', value: 'level' },
        { text: '密度', align: 'right', value: 'density' },
        { text: 'note', align: 'right', value: 'notes' },
        { text: 'bpm', align: 'right', value: 'bpm' },
      ],
      items: ['DEBUT', 'REGULAR', 'PRO', 'MASTER', 'MASTER+LEGACY', 'MASTER+'],
    }),

    computed: {
      ...mapState({
        songs(state) {
          return state.songs.filter(song => this.difficulty(song, this.difficultySelected));
        },
      }),
      pagination: {
        get() {
          return this.$store.state.songsPagination;
        },
        set(val) {
          this.$store.commit('setSongsPagination', val);
        },
      },
      search: {
        get() {
          return this.$store.state.songsSearchKey;
        },
        set(val) {
          this.$store.commit('setSongsSearchKey', val);
        },
      },
      difficultySelected: {
        get() {
          return this.$store.state.difficultySelected;
        },
        set(val) {
          this.$store.commit('setSongsDifficulty', val);
        },
      },
    },

    methods: {
      difficulty(song, rank) {
        switch (rank) {
          case 'DEBUT':
            return song.difficulties[0];
          case 'REGULAR':
            return song.difficulties[1];
          case 'PRO':
            return song.difficulties[2];
          case 'MASTER':
            return song.difficulties[3];
          case 'MASTER+LEGACY':
            return song.difficulties.length === 6 ? song.difficulties[4] : null;
          case 'MASTER+':
            return song.difficulties.length === 6 ? song.difficulties[5] : song.difficulties[4];
          default:
            return null;
        }
      },
      typeColor(type) {
        switch (type) {
          case '全タイプ':
            return 'brown--text darken-3';
          case 'キュート':
            return 'pink--text darken-3';
          case 'クール':
            return 'blue--text darken-3';
          case 'パッション':
            return 'orange--text darken-3';
          default:
            return null;
        }
      },
      sort(items, index, isDescending) {
        if (index === null) return items;

        return items.sort((a, b) => {
          let sortA = a[this.pagination.sortBy];
          let sortB = b[this.pagination.sortBy];
          if (this.pagination.sortBy === 'level') {
            sortA = this.difficulty(a, this.difficultySelected).level;
            sortB = this.difficulty(b, this.difficultySelected).level;
          } else if (this.pagination.sortBy === 'density') {
            sortA = this.difficulty(a, this.difficultySelected).density;
            sortB = this.difficulty(b, this.difficultySelected).density;
          } else if (this.pagination.sortBy === 'notes') {
            sortA = this.difficulty(a, this.difficultySelected).notes;
            sortB = this.difficulty(b, this.difficultySelected).notes;
          }
          if (isDescending) {
            [sortA, sortB] = [sortB, sortA];
          }

          // Check if both are numbers
          if (!isNaN(sortA) && !isNaN(sortB)) {
            return sortA - sortB;
          }

          // Check if both cannot be evaluated
          if (sortA === null && sortB === null) {
            return 0;
          }

          [sortA, sortB] = [sortA, sortB]
            .map(s => (
              (s || '').toString().toLocaleLowerCase()
            ));

          if (sortA > sortB) return 1;
          if (sortA < sortB) return -1;

          return 0;
        });
      },
    },

    created() {
      this.$store.dispatch('fetchSongs');
    },
  };

</script>
<style lang="postcss">

</style>
