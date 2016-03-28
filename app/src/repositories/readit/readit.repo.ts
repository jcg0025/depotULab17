import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import ReaditService from '../../services/readit/readit.svc'

export default class ReaditRepository extends BaseRepository {
    constructor(private readitService: ReaditService){
        super();
    }
    getRedditList(): any {
      return this.readitService.getRedditList().then((success : any) => {
            let postArray = success.data.children;
            let filteredArray: any =[];
            for (let i = 0; i <postArray.length; i ++) {
                let post = {
                    author: postArray[i].data.author,
                    id: postArray[i].data.id,
                    title: postArray[i].data.title,
                    url: postArray[i].data.url,
                    thumbnail: postArray[i].data.thumbnail
                }
                filteredArray.push(post);
            }
            
            let data = filteredArray;
            console.log('here');
            // console.log(data);
            return data;
        }, (error :any) => {
            console.log(error)
            throw error;
        });
    }
    getRedditPost(id: string) {
        return this.readitService.getRedditList().then((success :any) => {
            console.log(success);
            let postArray = success.data.children;
            let filteredArray: any =[];
            for (let i = 0; i <postArray.length; i ++) {
                let post = {
                    author: postArray[i].data.author,
                    id: postArray[i].data.id,
                    title: postArray[i].data.title,
                    url: postArray[i].data.url,
                    thumbnail: postArray[i].data.thumbnail
                }
                filteredArray.push(post);
            }
            
            let data = filteredArray;
            for (let i=0; i < data.length; i++) {
                if (data[i].id === id) {
                    return data[i];
                }
            }
        })
    }

}

    

register.injectable('readit-repo', ReaditRepository, [ReaditService]);
