# Webcomponents Playground

My starter project for developing with the web's latest standards and [lit](https://lit-element.polymer-project.org/).

This is evolving and will be updated when new features come available in Chrome/Firefox.

## Usage

### Firefox

TODO: Firefox does not support import maps yet, so the example will not run as-is on Firefox. Use Chrome instead.

### Chrome

You will need Chrome 74+.

Additonally, you need to enable the experimental support for import maps. 
Go to link:chrome://flags/[] and enable "Built-in module infra and import maps".

### Run

Assuming you did the previous steps, you can now run:

    git clone https://github.com/38leinaD/webstandards-starter.git
    cd webstandards-starter
    npm install
    npm start

**_NOTE:_**  The command 'npm install' has been overwitten in the `package.json` to also run 'npx @pika/web'.

## Tips

For convenience, I have added a `devDependency` in the `package.json` to download browser-sync.
You should really have [browser-sync](https://browsersync.io/) installed globally. Run `sudo npm install -g browser-sync`.
I don`t want to download it for each project I am working on as it is such an essential tool.

The same holds true to me for `@pika/web`. 
