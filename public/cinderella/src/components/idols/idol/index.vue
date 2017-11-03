<template lang="pug">
  div
    v-breadcrumbs(icons divider="forward")
      v-breadcrumbs-item
        router-link(to="/idols") アイドル一覧
      v-breadcrumbs-item {{idolName}}

    v-card-title(primary-title)#amazon
      div
        h1.headline(:class="typeColor(idol.type)") {{idolName}}
    v-layout
      v-flex(xs6 v-if="idol")
        v-list
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption よみがな
              v-list-tile-sub-title {{idol.nameHiragana}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption タイプ
              v-list-tile-sub-title {{idol.type}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption 年齢
              v-list-tile-sub-title {{idol.age}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption 誕生日
              v-list-tile-sub-title {{idol.birthday}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption 出身地
              v-list-tile-sub-title {{idol.birth}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption 血液型
              v-list-tile-sub-title {{idol.bloodType}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption スリーサイズ
              v-list-tile-sub-title {{idol.bust}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption 身長・体重
              v-list-tile-sub-title {{idol.height}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption 星座
              v-list-tile-sub-title {{idol.constellation}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption 利き手
              v-list-tile-sub-title {{idol.hand}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption 趣味
              v-list-tile-sub-title {{idol.favorite}}
          v-list-tile
            v-list-tile-content
              v-list-tile-title.gray--text.caption 声優
              v-list-tile-sub-title {{idol.cv}}
      v-flex(xs6)
        span 参加楽曲：
        div(v-for="(_, song) in idolSongs")
          router-link(:to="`/songs/${encodeURIComponent(song)}`") {{song}}


</template>
<script>
  import { mapState } from 'vuex';
  import { getIdolSongs } from '@/api/idol/index';
  import createAmazonAd from '@/components/common/affiliate/amazon';

  export default {
    data() {
      return {
        idolSongs: [],
      };
    },
    computed: {
      ...mapState({
        idol(state) {
          return state.idols.filter(idol => idol.name === this.idolName)[0];
        },
      }),
      idolName() {
        return decodeURIComponent(this.$route.params.idolName);
      },
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
// eslint-disable-next-line no-return-assign
      getIdolSongs(this.idolName).then((idolSongs) => {
        this.idolSongs = idolSongs;
      });
    },

    mounted() {
      createAmazonAd(this.idolName);
    },
  };
</script>
