export function useFormattedData(dateString: string, locale: string = 'es-ES') {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}