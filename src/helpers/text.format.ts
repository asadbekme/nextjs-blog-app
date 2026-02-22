export const formatMetaDescription = (
  text: string,
  maxLength = 155,
): string => {
  const firstParagraph = text.split("\n")[0].trim();

  if (firstParagraph.length > maxLength) {
    return firstParagraph.slice(0, maxLength).trimEnd() + "...";
  }

  return firstParagraph;
};
