import https from 'https';

export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  https.get(url, (upstream) => {
    if (upstream.statusCode !== 200) {
      return res.status(502).json({ error: `Upstream returned ${upstream.statusCode}` });
    }

    const contentType = upstream.headers['content-type'] || 'image/png';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=600');

    upstream.pipe(res);
  }).on('error', (err) => {
    res.status(500).json({ error: err.message });
  });
}
