import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ReaditRepository from '../../repositories/readit/readit.repo';

export default class SinglePostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context= {
        
            author: '',
            title: '',
            url: ''
        
    };
    
    constructor(private repo: ReaditRepository) {
        super();
    }
    
    navigatedTo(parameters: any) {
        let someid = parameters.id;
        console.log(someid);
        this.repo.getRedditPost(someid).then((success) => {
          console.log(success.author);
          this.context.author = success.author;
          this.context.title = success.title;
          this.context.url = success.url;
       }, (error) => {
           console.log(error);
       });
    }
  
}

register.viewControl('singlepost-vc', SinglePostViewControl, [ReaditRepository]);
