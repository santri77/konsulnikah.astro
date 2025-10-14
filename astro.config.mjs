import { defineConfig } from 'astro/config';

export default defineConfig({
  // 🌐 Domain resmi situs
  site: 'https://konsulnikah.or.id',

  // ⚙️ Pastikan Astro membangun output statis (HTML ke folder dist)
  output: 'static',

  // ✍️ Dukungan Markdown + MDX untuk artikel blog
  markdown: { mode: 'mdx' },

  // (opsional) kamu bisa tambahkan pengaturan lain di sini nanti, contoh:
  // integrations: [],
  // vite: { server: { port: 3000 } },
});
