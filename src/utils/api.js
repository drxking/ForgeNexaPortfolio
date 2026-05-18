export const API_BASE = 'https://back.sudipacharya456.com.np/api';

export async function fetchPosts() {
    const res = await fetch(`${API_BASE}/posts`);
    if (!res.ok) throw new Error(`Failed to load posts (${res.status})`);
    return res.json();
}

export async function fetchPostById(id) {
    const res = await fetch(`${API_BASE}/posts/${id}`);
    if (!res.ok) throw new Error(`Failed to load post (${res.status})`);
    return res.json();
}

export function formatBlogDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
}

export function deriveCategory(headline = '') {
    const h = headline.toLowerCase();
    if (h.includes('dns') || h.includes('http') || h.includes('network')) return 'Networking';
    if (h.includes('node') || h.includes('express')) return 'Backend';
    if (h.includes('linux') || h.includes('shell')) return 'Systems';
    if (h.includes('cyber') || h.includes('security')) return 'Security';
    if (h.includes('react') || h.includes('design')) return 'Frontend';
    return 'Article';
}

export function excerpt(text = '', max = 110) {
    const clean = text.replace(/\s+/g, ' ').replace(/^##\s*[^\s]+\s*/g, '').trim();
    if (clean.length <= max) return clean;
    return clean.slice(0, max).trimEnd() + '…';
}
