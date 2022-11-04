export function getBaseUrl(req) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  return req ? `${protocol}://${req.headers.host}` : ''
}
