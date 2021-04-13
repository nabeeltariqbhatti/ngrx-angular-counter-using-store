import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { Appstate} from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { getPosts } from './state/post.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {


  posts:Observable<Post[]>;
  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {
  
this.posts=this.store.select(getPosts)
  console.log(this.posts)
  }

}
