module.exports = {
     webpack: {
          configure: (webpackConfig) => {
               // Modifikasi webpackConfig sesuai kebutuhan
               return webpackConfig;
          },
     },
     jest: {
          configure: {
               // Jest 27 (bawaan CRA) belum mendukung field "exports" milik react-router v7
               moduleNameMapper: {
                    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom/dist/index.js",
                    "^react-router$": "<rootDir>/node_modules/react-router/dist/development/index.js",
                    "^react-router/dom$": "<rootDir>/node_modules/react-router/dist/development/dom-export.js",
               },
          },
     },
     // Kamu bisa menambahkan lebih banyak konfigurasi sesuai dengan kebutuhan
};
