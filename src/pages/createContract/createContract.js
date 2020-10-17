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
		API.get_contract_types().then((body)=>{
			this.setState({contract_types: body});
		});
    }
    

    render(){
		var users = this.state.users;
		var contract_types = this.state.contract_types;
		var form = <div className="loading">loading...</div>;
		if(users && contract_types){
			form = 
			<div className="form">
				<div className="form-item">
					<div className="form-label">Пользователь</div><div className="form-value"><CustomSelect name="user_id" items={users}/></div>
					<div className="form-label">Тип</div><div className="form-value"><CustomSelect name="type_id" items={contract_types}/></div>
					<div className="form-label">Описание</div><div className="form-value"><input name="description"></input></div>
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