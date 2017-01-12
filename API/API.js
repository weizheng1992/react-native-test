

/**
 * https://github.com/skellock/apisauce
 */
import {create as API} from 'apisauce';


export const USER_API = {
    about: 'app/about',                  // 关于我们
    feedback: 'app/feedback',            // 提交反馈意见
    question: 'app/question',            // 常见问题
    movieSearch: '/v2/movie/search?q='   // 电影条目搜索
};

export const HOME_API={
    topshow:'topshow',
    ranking:'ranking',
}

export const Event = {
    eventList: '/v2/event/list?loc=' // 获取活动列表  loc  day_type type
};


export default service = API({
    baseURL: 'http://115.28.186.171:12000/api/v1/',
    timeout: 10000,
    headers: {'Accept': 'application/json'}
});
