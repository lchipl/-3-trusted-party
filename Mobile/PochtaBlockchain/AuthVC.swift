//
//  ViewController.swift
//  PochtaBlockchain
//
//  Created by Николай Пучко on 16.10.2020.
//

import UIKit

class AuthVC: UIViewController {

    @IBAction func authTapped() {
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        if user.isSigned() {
            self.present(storyboard.instantiateViewController(identifier: "CreateVC") as! CreateVC, animated: true)

        } else {
            self.present(storyboard.instantiateViewController(identifier: "PhoneNumberVC") as! PhoneNumberVC, animated: true)
        }

//        let dvc = storyboard.instantiateViewController(identifier: "NavigationVC") as! NavigationVC
    }
    
    @IBAction func gosuslugiTapped(_ sender: Any) {
        let alert = UIAlertController(title: "Быстрый безопасный способ верификации!", message: "Возможность интеграции аккаунта ЕСИА доступна только определенным организиям (включая Почту России 🙂)", preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "Ладно, давай тогда через телефон", style: .default, handler: nil))
        self.present(alert, animated: true)
    }
    
}

