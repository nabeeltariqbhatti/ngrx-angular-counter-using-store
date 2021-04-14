import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { CounterComponent } from "./ccounter/counter/counter.component";
import { HomeComponent } from "./home/home.component";
import { AddPostsComponent } from "./posts/add-posts/add-posts.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";

const routes:Routes=[
 {
  path:'',component:HomeComponent
 },{
  path:'counter',component:CounterComponent
 },
 {
  path:'posts',component:PostsListComponent,
  children:[
 {path:'add',component:AddPostsComponent}
  ]
  
 }

];

@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule],
})

export class AppRoutingModule {}