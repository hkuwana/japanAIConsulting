// Create a writable store for language preference
// Default to English, will be updated based on browser preference in +page.svelte
export const language: string = $state('en'); 