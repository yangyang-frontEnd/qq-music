const axios = require('axios')

module.exports = {
    devServer: {
        port: 3000,
        before(app) {
            app.get('/api/getRecommend', (request, response) => {

                const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
                // 2.请求QQ服务器
                axios.get(url, {
                    params: request.query,
                    headers: {
                        //1.欺骗QQ服务器
                        referer: 'https://y.qq.com/?ADTAG=myqq',
                        Origin: 'https://y.qq.com'
                    }
                }).then(res => {
                    response.json(res.data)
                })
            })

        }
    }
}