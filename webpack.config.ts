import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CompressionPlugin from "compression-webpack-plugin";
import ESLintPlugin from 'eslint-webpack-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
  entry: "./src/ts/ecoindex-badge.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'ecoindex-badge.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false
    }),
    new ESLintPlugin({
      extensions: ['ts']
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/i,
        terserOptions: {
          mangle: true
        }
      })
    ]
  },
  mode: "production",
};

export default config;