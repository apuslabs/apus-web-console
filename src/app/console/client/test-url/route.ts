export async function GET(request: Request) {
    // get query params from url
    const url = new URL(request.url)
    const params = url.searchParams
    const urlParam = params.get('url')
    // if no url param return 400
    if (!urlParam) {
        return new Response(JSON.stringify({status: 400}), {
            headers: { 'content-type': 'application/json;charset=UTF-8' },
        })
    }
    const requestUrl = new URL(urlParam)
    // test url param must return 200 or 204
    const testUrl = await fetch(requestUrl.protocol + '//' + requestUrl.host + '/status')
    const testUrlStatus = testUrl.status
    // return response
    return new Response(JSON.stringify({status: testUrlStatus}), {
        headers: { 'content-type': 'application/json;charset=UTF-8' },
    })
}