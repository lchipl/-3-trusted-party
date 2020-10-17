var API = {
    db_url: 'https://post-prototype.firebaseio.com/',

    make_url: function(url){
        return this.db_url+url;
    },
    
    fetch: async function(url){
        var data = await fetch(this.make_url(url));
        return data.json();
    },

    get_users: async function(){
        var url = 'users.json';
        var users = await this.fetch(url);
        return users;
    },

    get_contract_types: async function(){
        var url = 'contract_types.json';
        var contract_types = await this.fetch(url);
        return contract_types;
    },


    add: async function(url, data){
        var ret = await fetch(this.make_url(url), {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        return ret.json();
    },

    create_contract: async function(data){
        var url = 'contracts.json';
        data.id = Math.random()*10000000;
        data.date_cr = new Date.toLocaleDateString();
        var response = await this.add(url, data);
        return response;
    },
};

export default API