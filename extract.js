const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = path.join(__dirname, 'public', 'hero.mp4');
const outDir = path.join(__dirname, 'public', 'frames');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
} else {
  // clear it
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir);
}

console.log(`Extracting frames using ${ffmpeg}...`);
// Extract at 10 fps to keep the number of frames reasonable, scaling to 1280 width to save space
try {
  execSync(`"${ffmpeg}" -i "${videoPath}" -vf "fps=10,scale=1280:-1" -q:v 5 "${path.join(outDir, 'frame_%04d.jpg')}"`, { stdio: 'inherit' });
  console.log('Extraction complete.');
} catch (e) {
  console.error('Failed to extract:', e);
}
