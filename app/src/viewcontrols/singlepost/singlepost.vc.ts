import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ReaditRepository from '../../repositories/readit/readit.repo';

export default class SinglePostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context= {
        
            author: '',
            title: '',
            url: '',
            thumbnail: ''
        
    };
    
    constructor(private repo: ReaditRepository) {
        super();
    }
    
    navigatedTo(parameters: any) {
        let someid = parameters.id;
        this.repo.getRedditPost(someid).then((success :any) => {
          this.context.author = success.author;
          this.context.title = success.title;
          this.context.url = success.url;
          this.context.thumbnail = success.thumbnail;
       }, (error :any) => {
           console.log(error);
           throw error;
       });
    }
  
}

register.viewControl('singlepost-vc', SinglePostViewControl, [ReaditRepository]);
