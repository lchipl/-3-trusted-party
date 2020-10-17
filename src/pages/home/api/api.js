import React from "react";

var API = {
    db_url: 'https://post-prototype.firebaseio.com/',
    
    fetch: async function(url){
        // var ret = new Promise(function(succ, err){
        //     var href = {
        //         url: url,
        //         method: 'GET',
        //         contentType: 'application/json',
        //         success: succ,
        //         error: err
        //     };
        // });
        

        // return ret;
        var data = await fetch(this.db_url+url);
        return data.json();
    },

    get_users: async function(){
        var url = 'users.json';
        var users = await this.fetch(url);
        return users;
    },
};

export default API