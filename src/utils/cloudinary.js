// Utility to fetch image URLs from a Cloudinary folder using the public API
// This uses the Cloudinary search API (unsigned, no secret required)

export async function fetchCloudinaryImages(folder) {
  const cloudName = 'drfcjlc5n';
  const url = `https://res.cloudinary.com/${cloudName}/image/list/${folder}.json`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Could not fetch Cloudinary images');
    const data = await res.json();
    // Returns array of URLs
    return data.resources.map(img => `https://res.cloudinary.com/${cloudName}/image/upload/${img.public_id}.${img.format}`);
  } catch (err) {
    console.error('Error fetching images from Cloudinary:', err);
    return [];
  }
}
