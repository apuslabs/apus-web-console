import axios from 'axios'

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
    const requestResult = await axios.post(urlParam, {
        jsonrpc: '2.0',
        id: 1,
        method: 'proof',
        params: [{
            circuit: 'super',
            block: 1,
        }],
    })
    if (requestResult.status === 200 && requestResult.data?.error?.code === -32000) {
        return new Response(JSON.stringify({status: 200}), {
            headers: { 'content-type': 'application/json;charset=UTF-8' },
        })
    }
    return new Response(JSON.stringify({status: requestResult.status === 200 ? 500 : requestResult.status}), {
        headers: { 'content-type': 'application/json;charset=UTF-8' },
    })
}