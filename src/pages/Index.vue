<template>
  <Layout>
    <g-image alt="Profile image" src="~/favicon.png" width="135" />
    <h1>myuunews</h1>

    <p>
      <a class="twitter-share-button" href="https://twitter.com/intent/tweet">Tweet</a>
    </p>
    <p>81プロデュース所属の声優・高木美佑さんの情報を集約するための非公式Twitterアカウントです。</p>

    <h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-info"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      Information
    </h2>
    <ul>
      <li>
        当アカウントは、
        <g-link to="https://github.com/yoppinews/yoppinews-bot">yoppinews/yoppinews-bot</g-link>を利用しています。
      </li>
      <li>
        情報の誤りに関する指摘や情報提供は
        <g-link to="https://twitter.com/myuunews">Twitter</g-link> DMにてお願いいたします。
      </li>
      <li>可能な限り正確な情報を収集するよう努めますが、その正確性についていかなる保証も行いません。当アカウントを使用したことに起因する損害についていかなる責任も負いません。</li>
      <li>
        管理者:
        <g-link to="https://twitter.com/_theoria">@_theoria</g-link>
      </li>
    </ul>

    <h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-calendar"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      Calendar
    </h2>
    <p>イベントをクリックするとGoogle Calendarが開きます。</p>
    <Calendar />

    <h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-twitter"
      >
        <path
          d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
        />
      </svg>
      Timeline
    </h2>
    <a
      class="twitter-timeline"
      href="https://twitter.com/myuunews?ref_src=twsrc%5Etfw"
    >Tweets by myuunews</a>

    <h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-link"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
      Link
    </h2>
    <ul>
      <li>
        <g-link
          to="https://www.81produce.co.jp/actor_search/index.php/item?id=231&name=%E9%AB%98%E6%9C%A8%E3%80%80%E7%BE%8E%E4%BD%91"
        >81プロデュースによるプロフィール</g-link>
      </li>
      <li>
        <g-link to="https://twitter.com/Yukgaejang98">Twitter (@Yukgaejang98)</g-link>
      </li>
      <li>
        のびしろにょきにょき
        <ul>
          <li>
            <g-link to="https://ch.nicovideo.jp/nobishiro-nyokinyoki">ニコニコチャンネル</g-link>
          </li>
          <li>
            <g-link to="https://twitter.com/nobishironyoki2">Twitter (@nobishironyoki2)</g-link>
          </li>
        </ul>
      </li>
      <li>
        青山吉能と高木美佑が送る、マイナスイオンたっぷりのヒーリングラジオ。略して、「−マイラジ」
        <ul>
          <li>
            <g-link to="https://ch.nicovideo.jp/thecreate">ニコニコチャンネル (「中島ヨシキのザックリエイト」チャンネル)</g-link>
          </li>
          <li>
            <g-link to="https://twitter.com/thecreate8">Twitter (@thecreate8) (中島ヨシキのザックリエイト公式)</g-link>
          </li>
        </ul>
      </li>
      <li>
        高木美佑のお夜食マリアージュ
        <ul>
          <li>
            <g-link to="https://ch.nicovideo.jp/youdeallive">ニコニコチャンネル (YOUDEALヒルズ荘)</g-link>
          </li>
          <li>
            <g-link to="https://twitter.com/y_hills_sou">Twitter (@y_hills_sou) (YOUDEALヒルズ荘)</g-link>
          </li>
        </ul>
      </li>
      <li>
        英美里・美佑といっしょに『グラブル』！
        <ul>
          <li>
            <g-link to="https://ch.nicovideo.jp/famitsu">ニコニコチャンネル (ファミ通チャンネル)</g-link>
          </li>
          <li>
            <g-link to="https://www.youtube.com/user/famitsutube">YouTubeチャンネル (ファミ通TUBE)</g-link>
          </li>
          <li>
            <g-link to="https://twitter.com/WeeklyFamitsu">Twitter (@WeeklyFamitsu) (週刊ファミ通)</g-link>
          </li>
          <li>
            <g-link to="https://twitter.com/famitsu">Twitter (@famitsu) (ファミ通.com)</g-link>
          </li>
        </ul>
      </li>
      <li>
        D4DJ
        <ul>
          <li>
            <g-link to="https://d4dj-pj.com/">公式サイト</g-link>
          </li>
          <li>
            <g-link to="https://twitter.com/D4DJ_pj">Twitter (@D4DJ_pj)</g-link>
          </li>
          <li>
            <g-link to="https://www.instagram.com/d4dj_official/">Instagram (@d4dj_official)</g-link>
          </li>
          <li>
            <g-link
              to="https://www.youtube.com/channel/UCNWWdKniJyzQA3RiJ5LMoVw"
            >YouTubeチャンネル (D4DJチャンネル)</g-link>
          </li>
          <li>
            <g-link
              to="https://hibiki-radio.jp/description/pkpk/detail"
            >響ラジオステーション「D4DJ ピキピキRADIO」 (毎週月曜日更新)</g-link>
          </li>
          <li>
            アプリゲーム Groovy Mix
            <ul>
              <li>
                <g-link to="https://d4dj.bushimo.jp/">公式サイト</g-link>
              </li>
              <li>
                <g-link to="https://twitter.com/D4DJ_gm">Twitter (@D4DJ_gm)</g-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        ゲームとアニメの情報バラエティ『木曜だからゲッチャ』
        <ul>
          <li>
            <g-link to="https://ch.nicovideo.jp/ch1616">ニコニコチャンネル</g-link>
          </li>
          <li>
            <g-link to="https://www.youtube.com/channel/UC6pUKYPp9JjtZ80gb3tG65g">YouTubeチャンネル</g-link>
          </li>
          <li>
            <g-link to="https://twitter.com/gacha_thursday">Twitter (@gacha_thursday)</g-link>
          </li>
        </ul>
      </li>
      <li>
        <g-link
          to="https://ja.wikipedia.org/wiki/%E9%AB%98%E6%9C%A8%E7%BE%8E%E4%BD%91"
        >Wikipedia（日本語）</g-link>
      </li>
      <li>
        <g-link to="https://zh.wikipedia.org/wiki/%E9%AB%98%E6%9C%A8%E7%BE%8E%E4%BD%91">维基百科（中文）</g-link>
      </li>
      <li>
        <g-link to="https://www.wikidata.org/wiki/Q17686837">Wikidata (Q17686837)</g-link>
      </li>
      <li>
        <g-link to="http://www.isni.org/isni/0000000466688311">ISNI (0000 0004 6668 8311)</g-link>
      </li>
      <li>
        <g-link
          to="https://musicbrainz.org/artist/b2ade2fc-ea53-447b-9bc4-81aca7a08bdf"
        >MusicBrainz (b2ade2fc-ea53-447b-9bc4-81aca7a08bdf)</g-link>
      </li>
      <li>
        <g-link to="https://www.imdb.com/name/nm6216741/">IMDb (nm6216741)</g-link>
      </li>
    </ul>
  </Layout>
</template>

<script>
import Calendar from "~/components/Calendar.vue";

export default {
  metaInfo: {
    title: "myuunews"
  },
  components: {
    Calendar
  }
};
</script>

<style>
h2 {
  margin-top: 50px;
}
</style>
