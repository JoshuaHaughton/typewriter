const sentence = "hello there from lighthouse labs\n";

let delay = 300;
for (const letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay)
  delay += 300
  
}
