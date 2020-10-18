//
//  CodeValidVC.swift
//  PochtaBlockchain
//
//  Created by Николай Пучко on 16.10.2020.
//

import UIKit
import FirebaseAuth

class CodeValidVC: UIViewController {

    var verificationID: String!
    @IBOutlet weak var checkCodeButton: UIButton!
    @IBAction func checkCodeTapped(_ sender: Any) {
        guard let code = codeTextView.text else { return }
        
        
        let credetional = PhoneAuthProvider.provider().credential(withVerificationID: verificationID, verificationCode: code)
        
        Auth.auth().signIn(with: credetional) { (_, error) in
            if error != nil {
                let ac = UIAlertController(title: error?.localizedDescription, message: nil, preferredStyle: .alert)
                let cancel = UIAlertAction(title: "Отмена", style: .cancel)
                ac.addAction(cancel)
                self.present(ac, animated: true)
            } else {
                UserDefaults.standard.set(user.phoneNumber, forKey: "phoneNumberKey")
                UserDefaults.standard.synchronize()
                self.showConentVC()
            }
        }
        
        showConentVC()
    }
    @IBOutlet weak var codeTextView: UITextView!
    
    private func showConentVC() {
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        let dvc = storyboard.instantiateViewController(identifier: "CreateVC") as! CreateVC
        self.present(dvc, animated: true)
        
    }
    override func viewDidLoad() {
        super.viewDidLoad()

        setupConfig()
        // Do any additional setup after loading the view.
    }


    private func setupConfig() {
        codeTextView.textColor = .black
        checkCodeButton.alpha = 0.5
        checkCodeButton.isEnabled = false
        codeTextView.delegate = self
    }
}

extension CodeValidVC: UITextViewDelegate {
    func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool {
        
        let currentCharacterCount = textView.text?.count ?? 0
        if range.length + range.location > currentCharacterCount {
            return false
        }
        let newLenght = currentCharacterCount + text.count - range.length
        return newLenght <= 6
    }
    
    func textViewDidChange(_ textView: UITextView) {
        if textView.text?.count == 6 {
            checkCodeButton.alpha = 1
            checkCodeButton.isEnabled = true
        } else {
            checkCodeButton.alpha = 0.5
            checkCodeButton.isEnabled = false
        }
    }
}
