import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess(),
  // Specify the Node.js version
  // Add this line to your configuration
  target: 'node@16.0.0' // or 'node@18.0.0'
};

export default config;
