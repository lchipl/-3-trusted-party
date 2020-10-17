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
        var data = await fetch(url);
        return await data.json();
    },

    fetch_users: async function(){
        var url = this.db_url+'users';
        var users = await this.fetch(url);
        return users;
    },
};

export {API}