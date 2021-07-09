module.exports = {
  title: "Visnalize",

  description: "With love crafting, for perfection striving",

  head: [
    ["link", { rel: "icon", href: "/assets/favicon.png" }],
    [
      "script",
      {
        async: true,
        "data-ad-client": "ca-pub-5904323684803247",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
  ],

  themeConfig: {
    logo: "/assets/favicon.png",
    nav: [
      {
        text: "Win7 Simu",
        items: [
          { text: "About", link: "/win7simu/about" },
          { text: "Changelog", link: "/win7simu/changelog" },
          { text: "FAQ", link: "/win7simu/faq" },
          { text: "Privacy Policy", link: "/win7simu/privacy" },
        ],
      },
    ],
    sidebar: "auto",
    smoothScroll: true,
  },

  plugins: [
    [
      "autometa",
      {
        canonical_base: "https://visnalize.com",
        author: { name: "Visnalize" },
      },
    ],
  ],
};