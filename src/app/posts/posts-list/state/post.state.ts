import { Post } from "src/app/models/posts.model";

export interface PostState{
 posts:Post[];
}

 export const initialState:PostState = {
 posts:[
  { id:'1',
 title:"Web Development",
 description:"This is the dummy description of this post "},
  { id:'2',
 title:"Web Development",
 description:"This is the dummy description of this post "}
 , { id:'3',
 title:"Web Development",
 description:"This is the dummy description of this post "}
 ]

}