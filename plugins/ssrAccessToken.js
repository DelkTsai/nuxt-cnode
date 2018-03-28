import axios from '~/utils/axios'
import { parseCookieToToken } from '~/utils'

export default function({ isServer, req }) {
    if (isServer) {
        let accessToken = parseCookieToToken(req.headers.cookie)
        // 添加accessToken到axios全局配置，以供做服务端渲染时的其他请求获取
        accessToken && (axios.defaults.accesstoken = accessToken)
    }
}
