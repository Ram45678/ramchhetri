/**
 * Helper function to ensure images load correctly in both local development and production
 * @param path - The image path to process
 * @returns The correctly formatted image path
 */
export const getImagePath = (path: string) => {
  if (!path) return null;
  
  // If the path already starts with the base URL or is an absolute URL, use it as is
  if (path.startsWith('http') || path.startsWith(import.meta.env.BASE_URL)) {
    return path;
  }
  
  // Otherwise, prepend the base URL (removes leading slash if present)
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};
