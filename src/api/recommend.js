//包含 推荐 相关的网络请求
import axios from 'axios'
import {commonParams} from './commonParams'

export const getRecommend = () => {
    //之前的轮播图地址
    const url = '/api/getRecommend'

    const data = Object.assign({}, commonParams, {
        "-": 'recom14002785072077084',
        format: 'json',
        data: '{"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":5}},"new_album":{"module":"newalbum.NewAlbumServer","method":"get_new_album_info","param":{"area":1,"sin":0,"num":10}},"new_album_tag":{"module":"newalbum.NewAlbumServer","method":"get_new_album_area","param":{}},"toplist":{"module":"musicToplist.ToplistInfoServer","method":"GetAll","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}'
    })


    return axios.get(url, {
        params: data
    }).then(res => {
        //console.log(res.data.focus.data.content)
        return Promise.resolve(res.data.focus.data.content)
    })

}

export const getDiskList = () => {
    const url = '/api/getDislList'
    const data = {
        'cgiKey': 'GetHomePage',
        '_': '1582698712673',
        'data': `{"comm":{"g_tk":5381,"uin":"","format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"MusicHallHomePage":{"module":"music.musicHall.MusicHallPlatform","method":"MobileWebHome","param":{"ShelfId":[101,102,161]}},"hotkey":{"module":"tencent_musicsoso_hotkey.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"remoteplace":"txt.miniapp.wxada7aab80ba27074","searchid":"1559616839293"}}}`
    }

    //后台代理发请求
    return axios.get(url, {
        params: data
    }).then(res => {
        return Promise.resolve(res)
    }).catch(err => {

    })
}