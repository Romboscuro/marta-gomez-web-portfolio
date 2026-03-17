export async function getContents() {
  const response = await fetch('data/contents.json');
  const data = await response.json();
  return data;
}

export async function getContentByName(name) {
  const response = await fetch('data/contents.json');
  const data = await response.json();
  const filteredData = data.find((content) => content.name === name);
  return filteredData;
}
