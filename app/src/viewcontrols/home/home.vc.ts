import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ReaditRepository from '../../repositories/readit/readit.repo';
import SinglePostViewControl from '../../viewcontrols/singlepost/singlepost.vc'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
      posts: []
    }
    
    constructor(private readitRepo: ReaditRepository){
        super();
    }
    navigatedTo(): any {
        this.readitRepo.getRedditList().then((success :any) => {
           this.context.posts = success;
        })
   }
   readMore(id: string){
       this.navigator.navigate(SinglePostViewControl, {
           parameters: {
               id: id
           }
       })
   }

  
   
}

register.viewControl('home-vc', HomeViewControl, [ReaditRepository]);
