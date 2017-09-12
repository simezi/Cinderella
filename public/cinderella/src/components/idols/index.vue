<template lang="pug">
  div
    v-layout
      v-flex(xs6)
        v-text-field(
        v-model="search",
        append-icon="search",
        single-line hide-details label="名前検索")
    v-data-table(:headers = "headers",
    hide-actions
    :items = "idols",
    :search="search")
      template(slot="items" scope="props")
        tr(:class="typeColor(props.item.type)")
          td
            router-link(:to="'/idols/'+ encodeURIComponent(props.item.name)") {{props.item.name}}
          td {{props.item.type}}
          td {{props.item.cv}}

</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        search: '',
        headers: [
          { text: '氏名', align: 'left', value: 'name' },
          { text: 'type', align: 'left', value: 'type' },
          { text: 'cv', align: 'left', value: 'cv' },
        ],
      };
    },

    computed: {
      ...mapState({
        idols(state) {
          return state.idols;
        },
      }),
    },

    methods: {
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
    },

    created() {
      this.$store.dispatch('fetchIdols');
    },
  };

</script>
<style></style>
