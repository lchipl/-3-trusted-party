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
        let dvc = storyboard.instantiateViewController(identifier: "PhoneNumberVC") as! PhoneNumberVC
        present(dvc, animated: true)
    }
}

