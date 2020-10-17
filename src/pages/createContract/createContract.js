import React,{Component} from "react";
<<<<<<< HEAD
import API from "..\\home\\api\\api";
=======
import API from "..\\home\\api\\api"
>>>>>>> facdc187ba30bc7dfb293d876ff54137071cf355
import CustomSelect from "..\\home\\custom-select\\custom-select"

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