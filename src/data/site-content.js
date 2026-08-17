// 所有内容集中在这里：删除一项即可隐藏，复制一项即可新增。
export const siteContent = {
  identity: {
    mark: "LT",
    name: "光迹",
    subtitle: "LIGHT / TRACE",
    email: "hello@lighttrace.photo",
    location: "中国 · 杭州",
  },
  navigation: [
    { label: "作品", href: "#gallery" },
    { label: "手记", href: "#journal" },
    { label: "关于", href: "#about" },
  ],
  hero: {
    eyebrow: "PERSONAL PHOTOGRAPHY JOURNAL · 2026",
    titleLines: ["把日常", "留在光里。"],
    description:
      "我在旅途、街巷与山野之间收集光线。这里存放那些安静的瞬间，也记录按下快门之前与之后的故事。",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=88",
    imageAlt: "晨雾中的山野与旅行者",
    note: "最近拍摄 · 莫干山",
    stats: [
      { value: "08", label: "摄影年份" },
      { value: "24", label: "已整理相册" },
      { value: "12k", label: "留下的瞬间" },
    ],
  },
  gallery: {
    eyebrow: "SELECTED WORKS",
    title: "近期作品",
    intro: "按主题浏览我最近整理的照片。点击任意照片，可以进入沉浸式查看。",
    categories: ["全部", "山野", "城市", "日常"],
    photos: [
      {
        title: "山风经过",
        location: "川西 · 2025",
        category: "山野",
        size: "large",
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=88",
        alt: "群山与湖泊",
      },
      {
        title: "薄雾之晨",
        location: "新西兰 · 2024",
        category: "山野",
        size: "tall",
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=88",
        alt: "薄雾中的湖边小屋",
      },
      {
        title: "晚归的人",
        location: "上海 · 2025",
        category: "城市",
        size: "standard",
        src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=88",
        alt: "黄昏时分的城市",
      },
      {
        title: "无名旷野",
        location: "青海 · 2023",
        category: "山野",
        size: "wide",
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=88",
        alt: "荒野公路",
      },
      {
        title: "窗边的下午",
        location: "杭州 · 2025",
        category: "日常",
        size: "standard",
        src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=88",
        alt: "阳光照进安静的房间",
      },
      {
        title: "街角温度",
        location: "京都 · 2024",
        category: "城市",
        size: "standard",
        src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=88",
        alt: "街角建筑与行人",
      },
    ],
  },
  journal: {
    eyebrow: "FIELD NOTES",
    title: "摄影手记",
    intro: "不只是照片，也写下天气、路线、器材，以及那些偶然发生的小事。",
    posts: [
      {
        date: "2026.07.18",
        tag: "旅途",
        title: "在雨停之前，沿着山路慢慢走",
        excerpt: "一场突如其来的雨让计划全部暂停，也让山谷有了最柔软的颜色。",
        readTime: "6 分钟阅读",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=86",
      },
      {
        date: "2026.05.03",
        tag: "随笔",
        title: "为什么我越来越喜欢拍平凡的东西",
        excerpt: "好照片不总在远方。桌面的一束光、路人的背影，也可以成为时间的证据。",
        readTime: "4 分钟阅读",
        image:
          "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=86",
      },
      {
        date: "2026.03.22",
        tag: "器材",
        title: "一机一镜的周末：轻一点，反而看见更多",
        excerpt: "放下焦段焦虑后，我带着一支 35mm 镜头，在旧城区走了整整一天。",
        readTime: "8 分钟阅读",
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=86",
      },
    ],
  },
  about: {
    eyebrow: "BEHIND THE LENS",
    title: "你好，我是这本影像日记的作者。",
    paragraphs: [
      "我是一名生活在杭州的业余摄影爱好者。白天做着与影像无关的工作，周末则背上相机，在城市和自然里寻找值得停留的片刻。",
      "我偏爱自然光、安静的色彩，以及照片里没有被说完的故事。这个网站既是作品集，也是一间不断生长的私人档案室。",
    ],
    image:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1200&q=88",
    imageAlt: "摄影师在户外记录风景",
    kit: ["FUJIFILM X-T5", "XF 23MM F/1.4", "RICOH GR III", "LIGHTROOM"],
  },
  contact: {
    eyebrow: "SAY HELLO",
    title: "如果你也喜欢光、远方，和未说完的故事。",
    description: "欢迎交流摄影、约拍或图片授权。通常会在两天内回复。",
    button: "写封邮件",
  },
};

// 调整顺序、删除某一行，或将 enabled 改为 false，即可管理首页模块。
export const sectionRegistry = [
  { id: "hero", enabled: true },
  { id: "gallery", enabled: true },
  { id: "journal", enabled: true },
  { id: "about", enabled: true },
  { id: "contact", enabled: true },
];
