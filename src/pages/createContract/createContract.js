import React,{Component} from "react";
import {API} from "../home/api/api";

export class CreateContract extends Component{

    state={
        users:null
    }

    componentDidMount(){
        API.fetch_users.then((body)=>{
            this.setState({
               users:body
            })
        })
    }
    

    render(){
    return(
        <div>
			{this.state.users}
        </div>
    );
    }
}