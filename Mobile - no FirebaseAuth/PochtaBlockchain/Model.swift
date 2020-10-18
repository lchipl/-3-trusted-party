//
//  Model.swift
//  PochtaBlockchain
//
//  Created by Николай Пучко on 18.10.2020.
//

import Foundation

var user = User()
var myContracts: [Contract] = []

struct User {
    var phoneNumber: String = ""
    
    func isSigned() -> Bool {
        let defaults = UserDefaults.standard
        if defaults.object(forKey: "phoneNumberKey") != nil {
            return true
        } else {
            return false
        }
    }
}

struct Contract: Codable {
    var name: String
    var active: String = "Ожидает"
    //var price: String = "0"
    //var role: Bool = true // buyer by default
}

func createContract(contract: Contract) {
    myContracts.append(contract)
    saveDate()
}


func removeContract(at index: Int) {
    myContracts.remove(at: index)
    saveDate()
}

func saveDate () {
    //let array = DataContracts(data: myContracts)
    let defaults = UserDefaults.standard
    defaults.set(try? PropertyListEncoder().encode(myContracts), forKey: "myContractsKey")
    UserDefaults.standard.synchronize()
}

func loadData () {
    let defaults = UserDefaults.standard
    
    if let array = defaults.object(forKey: "myContractsKey") as? Data {
        myContracts = try! PropertyListDecoder().decode([Contract].self, from: array)
    } else {
        myContracts = [
            Contract(name: "Аренда гаража"),
            Contract(name: "Замена сцепления Civic ek3", active: "Активен"),
            Contract(name: "Установка телевизора", active: "Активен"),
            Contract(name: "iPhone X", active: "Обнародован")]
    }
}

