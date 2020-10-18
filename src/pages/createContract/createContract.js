import React,{Component} from "react";
import API from "..//home//api//api"
import CustomSelect from "..//home//custom-select//custom-select"

export class CreateContract extends Component{

    state={
		users: null,
		contract_types: null
    }

    componentDidMount(){
        API.get_users().then((body)=>{
            this.setState({
               users:body
            });
		});
		API.get_contract_types().then((body)=>{
			this.setState({contract_types: body});
		});
    }
	
	createContract(){
		var inputs = document.querySelectorAll('.form input, .form select');
		var data = {};
		for(var i = 0; i < inputs.length; i++){
			var input = inputs[i];
			var name = input.name;
			var value = input.value;
			data[name] = value;
		}
		API.create_contract(data);
	}

    render(){
		var users = this.state.users;
		var contract_types = this.state.contract_types;

		var form = <div className="loading">loading...</div>;

		if(users && contract_types){
			var create_contract = this.createContract.bind(this);
			var button = <div onClick={create_contract} className="button submit">Добавить</div>;

			form = 
			<div className="form">
				<div className="form-item">
					<div className="form-label">Пользователь</div><div className="form-value"><CustomSelect name="user_id" items={users}/></div>
				</div>
				<div className="form-item">
					<div className="form-label">Тип</div><div className="form-value"><CustomSelect name="type_id" items={contract_types}/></div>
				</div>
				<div className="form-item">
					<div className="form-label">Описание</div><div className="form-value"><input name="description"></input></div>
				</div>
				{button}
			</div>;
		}

		return(
			<div>
				{form}
			</div>
		);
    }
}
