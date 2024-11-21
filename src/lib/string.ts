
export function generateSlug(title:string) {
    return title
        .toLowerCase() // Convert to lowercase
        .trim()         // Remove whitespace from both ends
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Remove duplicate hyphens
}