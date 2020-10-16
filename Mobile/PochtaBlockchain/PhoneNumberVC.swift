//
//  PhoneNumberVCViewController.swift
//  PochtaBlockchain
//
//  Created by Николай Пучко on 16.10.2020.
//

import UIKit
import FirebaseAuth
import FlagPhoneNumber

class PhoneNumberVC: UIViewController {
    
    var phoneNumber: String?
    
    var listController: FPNCountryListViewController!

    @IBOutlet weak var phoneNubmerTextField: FPNTextField!
    
    @IBOutlet weak var fetchCodeButton: UIButton!
    
    @IBAction func fetchCodeTapped(_ sender: UIButton) {
        guard phoneNumber != nil else { return }
        PhoneAuthProvider.provider().verifyPhoneNumber(phoneNumber!, uiDelegate: nil) { (verificationID, error) in
            if error != nil {
                print(error?.localizedDescription ?? "Unknown error")
            } else {
                self.showCodeValidVC(verificationID: verificationID!)
            }
        }
    }
    
    private func showCodeValidVC(verificationID: String) {
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        let dvc = storyboard.instantiateViewController(identifier: "CodeValidVC") as! CodeValidVC
        dvc.verificationID = verificationID
        self.present(dvc, animated: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupConfig()
        // Do any additional setup after loading the view.
    }
    
    private func setupConfig() {
        fetchCodeButton.alpha = 0.5
        fetchCodeButton.isEnabled = false
        
        phoneNubmerTextField.textColor = .black
        phoneNubmerTextField.displayMode = .list
        phoneNubmerTextField.delegate = self
        
        listController = FPNCountryListViewController(style: .grouped)
        listController?.setup(repository: phoneNubmerTextField.countryRepository)
        
        listController.didSelect = { country in
            self.phoneNubmerTextField.setFlag(countryCode: country.code)
        }
        
    }
}

extension PhoneNumberVC: FPNTextFieldDelegate {
    func fpnDidSelectCountry(name: String, dialCode: String, code: String) {
        ///
    }
    
    func fpnDidValidatePhoneNumber(textField: FPNTextField, isValid: Bool) {
        if isValid {
            fetchCodeButton.alpha = 1
            fetchCodeButton.isEnabled = true
            
            phoneNumber = textField.getFormattedPhoneNumber(format: .International)
        } else {
            fetchCodeButton.alpha = 0.5
            fetchCodeButton.isEnabled = false
        }
    }
    
    func fpnDisplayCountryList() {
        let navigationController = UINavigationController(rootViewController: listController)
        listController.title = "Страны"
        phoneNubmerTextField.text = ""
        present(navigationController, animated: true)
    }
    
    
}
