import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.css']
})
export class AllPhotosComponent implements OnInit {
photos?:any[]=[];
  constructor(private net: HttpClient) { }

  ngOnInit(): void {
    const promise = this.net.get<any[]>('https://jsonplaceholder.typicode.com/albums/1/photos').toPromise();
      promise.then((data)=>{
        this.photos = data;
        console.log(this.photos);
        console.log("Promise back photos: " + JSON.stringify(data));
      }).catch((error)=>{
        console.log("Promise no get photos: " + JSON.stringify(error));
      });
  }

}
