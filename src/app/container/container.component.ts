import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
    selector: 'app-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss']
})

export class ContainerComponent {
    company: String = 'Janeto';
    now: Date = new Date(Date.now());
    imgUrl: String = 'assets/logo-white.png';
    textValue: String = 'Janeto';


    newName:string ='';
    newMember:string ='';
    files: any[] = [{
        id: 'a',
        name: 'Angular',
        modified: new Date(Date.now()),
        members: ['Nhu', 'linh'],
        type: 'docx'
    }, {
        id: 'b',
        name: 'C#',
        modified: new Date(Date.now()),
        members: ['Sơn', 'Kiên'],
        type: 'folder'
    }, {
        id: 'c',
        name: 'Nodejs',
        modified: new Date(Date.now()),
        members: ['Khanh', 'Huy'],
        type: 'docx'
    },

    {
        id: 'd',
        name: 'Java',
        modified: new Date(Date.now()),
        members: ['Thanh', 'Anh'],
        type: 'folder'
    }];
    folder: String = 'Home';
    constructor() { }

    changeImage() {
        this.imgUrl = this.imgUrl === 'assets/logo-janeto.png'
            ? 'assets/logo-white.png' : 'assets/logo-janeto.png';
    }

    changeText(value) {
        console.log(value);
    }

    check() {
        console.log(this.company);
    }

    changeFolder(name) {
        this.folder = name;
    }
    temp: any;
    checkfile(check) {
        this.temp = check;
    }
    deletefile(id) {
        if (this.temp === true) {
            for (let i = 0; i < this.files.length; i++) {
                if (this.files[i].id === id) {
                    this.files.splice(i, 1);
                }
            }
        }
    }

    them(){
        this.files.push({
            id : this.files.length +1,
            name: this.newName,
            members: this.newMember,
            modified: new Date(Date.now()),
            type:'folder'

        })
    }
    
}