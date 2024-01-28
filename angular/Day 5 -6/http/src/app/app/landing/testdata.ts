import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

export class TestData implements InMemoryDbService{
    constructor(){};
    createDb()
   {
        let bookDetails=[
            {id :100 ,"name":'Angular by Sahosoft' , category:'Angular'},
            {id :101 ,"name":'Angular by Sahosoft' , category:'Angular'},
            {id :102 ,"name":'Angular by Sahosoft' , category:'Angular'}
        ];
        return {books:bookDetails};
    }
}