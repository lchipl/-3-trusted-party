import React from "react";

export default function CustomSelect(props){
    console.log(props);
    var options = props.items.map(function(item){
        return <option key={item.id} value={item.id}>{item.name}</option>
    });
    if(props.add_null){
        options.unshift(<option></option>);
    }
    return <select name={props.name}>{options}</select>
}