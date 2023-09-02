// vite.config.ts
import { resolve } from "node:path";
import { defineConfig } from "file:///Users/claire/git/reactivity-workshop/node_modules/.pnpm/vite@4.4.9_@types+node@20.5.8/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/claire/git/reactivity-workshop/node_modules/.pnpm/vite-plugin-dts@3.5.3_@types+node@20.5.8_typescript@5.2.2_vite@4.4.9/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///Users/claire/git/reactivity-workshop/node_modules/.pnpm/vite-tsconfig-paths@4.2.0_typescript@5.2.2_vite@4.4.9/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/claire/git/reactivity-workshop/packages/reactivity";
var vite_config_default = defineConfig({
  root: resolve(__vite_injected_original_dirname),
  plugins: [
    dts({
      entryRoot: resolve(__vite_injected_original_dirname, "src"),
      tsconfigPath: resolve(__vite_injected_original_dirname, "tsconfig.json")
    }),
    tsconfigPaths()
  ],
  define: {
    "import.meta.vitest": "undefined"
  },
  build: {
    target: "esnext",
    outDir: resolve(__vite_injected_original_dirname, "dist"),
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src", "index.ts"),
      formats: ["es"]
    },
    minify: false,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
        sourcemap: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2xhaXJlL2dpdC9yZWFjdGl2aXR5LXdvcmtzaG9wL3BhY2thZ2VzL3JlYWN0aXZpdHlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jbGFpcmUvZ2l0L3JlYWN0aXZpdHktd29ya3Nob3AvcGFja2FnZXMvcmVhY3Rpdml0eS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2xhaXJlL2dpdC9yZWFjdGl2aXR5LXdvcmtzaG9wL3BhY2thZ2VzL3JlYWN0aXZpdHkvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJvb3Q6IHJlc29sdmUoX19kaXJuYW1lKSxcbiAgcGx1Z2luczogW1xuICAgIGR0cyh7XG4gICAgICBlbnRyeVJvb3Q6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gICAgICB0c2NvbmZpZ1BhdGg6IHJlc29sdmUoX19kaXJuYW1lLCAndHNjb25maWcuanNvbicpLFxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgXSxcbiAgZGVmaW5lOiB7XG4gICAgJ2ltcG9ydC5tZXRhLnZpdGVzdCc6ICd1bmRlZmluZWQnLFxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgb3V0RGlyOiByZXNvbHZlKF9fZGlybmFtZSwgJ2Rpc3QnKSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycsICdpbmRleC50cycpLFxuICAgICAgZm9ybWF0czogWydlcyddLFxuICAgIH0sXG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiAnc3JjJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICh7IG5hbWU6IGZpbGVOYW1lIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7ZmlsZU5hbWV9LmpzYDtcbiAgICAgICAgfSxcbiAgICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLG1CQUFtQjtBQUoxQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNLFFBQVEsZ0NBQVM7QUFBQSxFQUN2QixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixXQUFXLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ25DLGNBQWMsUUFBUSxrQ0FBVyxlQUFlO0FBQUEsSUFDbEQsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixzQkFBc0I7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUSxRQUFRLGtDQUFXLE1BQU07QUFBQSxJQUNqQyxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsT0FBTyxVQUFVO0FBQUEsTUFDM0MsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04saUJBQWlCO0FBQUEsUUFDakIscUJBQXFCO0FBQUEsUUFDckIsZ0JBQWdCLENBQUMsRUFBRSxNQUFNLFNBQVMsTUFBTTtBQUN0QyxpQkFBTyxHQUFHLFFBQVE7QUFBQSxRQUNwQjtBQUFBLFFBQ0EsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
