import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent{
    userName = '';

    onUpdateUsername(event: any){
        this.userName = event.target.value;
    }

    onResetUsername(){
        this.userName = '';
    }


}