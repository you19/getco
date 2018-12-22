import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AppService{

    authendicated: boolean = false;
 
    authenticate(credentials, callback) {
      
        if(credentials.username =='user' &&  credentials.password =='password'){
        
        this.authendicated=true;
        } else {
            this.authendicated=false;
        }    
        return callback && callback();
      }
    
}
