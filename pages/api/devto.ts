import { getArticles } from '../../lib/devto';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler() {
    const response = await getArticles();

    // show the 4 most viewed articles
    const articles = response
        .sort((a: any, b: any) => b.page_views_count - a.page_views_count)
        .slice(0, 4)
        .map((article: any) => ({
            title: article.title,
            link: article.url,
            views: article.page_views_count
        }));

    return new Response(JSON.stringify({ articles }), {
        status: 200,
        headers: {
        'content-type': 'application/json',
        }
    });
}
