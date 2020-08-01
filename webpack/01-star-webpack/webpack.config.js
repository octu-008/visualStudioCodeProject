const path = require('path');
const { isMainThread } = require('worker_threads');
module.exports={
  mode: "production",
  entry: "./src/use_main",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: 'main.js'
  }
};