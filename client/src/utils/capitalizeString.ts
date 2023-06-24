const capitalizeString = (str: string): string | null => {
  const trimmedString = str.trim();
  if (trimmedString.trim() === "") {
    return null;
  }
  const firstLetter = trimmedString.charAt(0).toUpperCase();
  const editedSlug = firstLetter + trimmedString.toLowerCase().substring(1);
  return editedSlug;
};

export default capitalizeString;
