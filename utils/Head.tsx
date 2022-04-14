const Title = (name?: string) => {
  if (typeof name !== "undefined") {
    return `${name} - Viktor Stopka`;
  } else {
    return `Viktor Stopka - Interactive Digital User Experience Designer`;
  }
};

const Description = `Hello! My name is Viktor. I am an interactive digital experience designer and developer based in Prague, Czechia.`;

const Head = { Title, Description };
export default Head;
