export type TSourceText = {
  pages: (pages: string) => string;
}

const tSourceText: TSourceText = {
  pages: (pages) => `s. ${pages}`
};

export default tSourceText;
