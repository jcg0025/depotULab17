import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class ReaditService extends BaseService {
    getRedditList(): async.IAjaxThenable<Array<Object>>{
        return this.http.json({
            method: 'GET',
            url: this.host
        }).then((success) => {
            return success.response;
        }, (error) => {
            throw error;
        });
    }

}

register.injectable('readit-svc', ReaditService);
