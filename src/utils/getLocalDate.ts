export const getLocalDate = (eventDate: string) => {
  const date = new Date(eventDate);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
  });
};
