import React, {Component} from "react";
import gql from 'graphql-tag';
import { graphql } from "react-apollo";

class SongList extends Component{

    render(){
      console.log(this.props);
      const RenderSongs = () => {
        if(this.props.data.loading){
          return <div>Şarkı listesi yükleniyor</div>
        }else {
          if(this.props.data.songs.length < 1){
            return <div>gösterilecek bir şarkı bulunamadı.</div>
          }else{
            return <div>{this.props.data.songs.map(s => s.title)}</div>
          }
        }
      }
      return(
        <div>
          Songs List
         {<RenderSongs />}
        </div>
      )
    }
}

const query = gql`{
  songs{
    title
  }
}`

export default graphql(query)(SongList);