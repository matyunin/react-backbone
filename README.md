# react-backbone
Sandbox: using react with backbone

### Usage
After cloning this repo and `npm install` + `bower install`:

```bash
$ node server.js
```

Then just type in browser: `https://localhost:3000` (by default)

### Structure

- `server.js` - Simple ExpressJS server with two routes (main and pagination emulation).
- `public/app.js` - Backbone _models_ and _collections_ definitions (in global namespace).
- `views/index.handlebars` - Main page with all logic.
