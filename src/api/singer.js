import  { commonParams } from './commonParams'
import axios from 'axios'

export const  getSingerList = (page)=>{
    //后台代理
    const url = '/api/getSingerList'

    const data = Object.assign({},commonParams,{
        '-': 'getUCGI11543390236289652',
        format:'json',
        data: `{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":${(page-1) * 80},"cur_page":${page}}}}`
    })

    return  axios.get(url,{
        params:data
    }).then(res=>{
        //console.log(res.data.singerList.data.singerlist)
        return Promise.resolve(res.data.singerList.data.singerlist)
    }).catch(error=>{

    })
}