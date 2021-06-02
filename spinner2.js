process.stdout.write('hello from spinner1.js... \rheyyy\n');
let delay = 0;
const spinArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\|   ', '\r/   '];

for (let i of spinArray) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay += 200);
};
