import React,{Component} from "react";
<<<<<<< HEAD
import {API} from "../home/api/api";
=======
import API from "..\\home\\api\\api"
import CustomSelect from "..\\home\\custom-select\\custom-select"
>>>>>>> 1d17b071085e916d976d002c9ff21efe77c3aa20

export class CreateContract extends Component{

    state={
		users: null,
		contract_types: null
    }

    componentDidMount(){
<<<<<<< HEAD
        API.fetch_users.then((body)=>{
=======
        API.get_users().then((body)=>{
>>>>>>> 1d17b071085e916d976d002c9ff21efe77c3aa20
            this.setState({
               users:body
            });
		});
		// API.get_contract_types().then()
    }
    

    render(){
		var users = this.state.users;
		var form = <div className="loading">loading...</div>;
		if(users){
			form = <div className="form">
				<div className="form-item">
					<div className="form-label">Пользователи</div><div className="form-value"><CustomSelect name="user_id" items={users}/></div>
				</div>
			</div>
		}
		return(
			<div>
				{form}
			</div>
		);
    }
}