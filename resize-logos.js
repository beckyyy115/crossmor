const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const logoDir = path.join(__dirname, "app/public/logos");

async function processLogos() {
  const files = fs.readdirSync(logoDir);

  for (const file of files) {
    if (file.toLowerCase().endsWith(".png")) {
      const inputPath = path.join(logoDir, file);
      const tempPath = path.join(logoDir, "temp-" + file);

      try {
        await sharp(inputPath)
          .resize(400, 400, {
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 },
          })
          .png()
          .toFile(tempPath);

        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, inputPath);

        console.log("✅ Resized:", file);
      } catch (err) {
        console.error("❌ Error processing:", file, err);
      }
    }
  }
}

processLogos();