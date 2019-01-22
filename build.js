const fs = require('fs');
const path = require('path');
const util = require('util');

const nunjucks = require('nunjucks');
const showdown = require('showdown');

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const converter = new showdown.Converter();

const buildMarkdown = async (filePath, fileName, template) => {
  const contents = await readFile(filePath, 'utf-8');
  const renderedDocument = nunjucks.render(path.join(__dirname, 'templates', `${template}.html`), { body: converter.makeHtml(contents), title: fileName.split('@@')[1].split('.md')[0] });
  await writeFile(path.join(__dirname, 'dist', `${fileName.split('@@')[0]}.html`), renderedDocument);
};

const buildHome = async () => {
  const directory = await readDir(path.join(__dirname, 'content', 'blog'));
  const posts = directory.map((file) => ({
    title: file.split('@@')[1].split('.md')[0],
    link: `${file.split('@@')[0]}.html`
  }));

  const renderedDocument = nunjucks.render(path.join(__dirname, 'templates', 'index.html'), { posts });
  await writeFile(path.join(__dirname, 'dist', 'index.html'), renderedDocument);
}

const buildDirectory = async (dirName, template) => {
  const directory = await readDir(dirName);
  const filePromises = [];
  
  directory.forEach((fileName) => {
    filePromises.push(Promise.resolve(buildMarkdown(path.join(dirName, fileName), fileName, template)));
  });

  await Promise.all(filePromises);
}

const build = async () => {
  await Promise.all([
    buildHome(),
    buildDirectory(path.join(__dirname, 'content', 'blog'), 'blog'),
  ]);
};

// Lol it's too easy sometimes
build();