const betterBackground = (document.body.style.backgroundColor = "#1e1d1d");
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

for (let i = 1; i <= 64; i++) {
  const tile = document.createElement("div");
  tile.style.width = "12.5%";
  tile.style.height = "12.5%";
  container.append(tile);
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  tile.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
}

document.body.append(container);
document.body.append(betterBackground);
