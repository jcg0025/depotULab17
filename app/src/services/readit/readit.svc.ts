import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class ReaditService extends BaseService {
    getRedditList(): any {
        return this.http.json({
            method: 'GET',
            url: this.host
        }).then((success :any) => {
            return success.response;
        }, (error : any) => {
            throw error;
        });
    }

}

register.injectable('readit-svc', ReaditService);
