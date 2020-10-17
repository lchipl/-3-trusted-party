import React,{Component} from "react";
import API from "..\\home\\api\\api"
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