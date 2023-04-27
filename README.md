# Capture Metabse Dashboard to PDF

Just a proof of concept, use it by your own.

- Metabase public dashboard url
- Puppeteer
- ImageMagick

```zsh
brew install ImageMagick node
npm install

# Screenshot on Metabase dashboard
node app.js

# Convert PNG to PDF
convert output.png output.pdf
```