//
//  CreateVC.swift
//  PochtaBlockchain
//
//  Created by Николай Пучко on 18.10.2020.
//

import UIKit

class CreateVC: UIViewController {

    
    
    @IBOutlet weak var textName: UITextField!
    
    
    @IBAction func cancelTapped(_ sender: Any) {
        let alert = UIAlertController(title: "Отменить создание контракта?", message: "Данные о сделке будут потеряны", preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "Отменить создание!", style: .cancel) {_ in
            let storyboard = UIStoryboard(name: "Main", bundle: nil)
            self.present(storyboard.instantiateViewController(withIdentifier: "NavigationVC") as! NavigationVC, animated: true)
        }
        )
        alert.addAction(UIAlertAction(title: "Продолжить редактирование!", style: .default))
        
        self.present(alert, animated: true)
        
        
    }
    
    @IBAction func submitTapped(_ sender: Any) {
        let newContract = Contract(name: textName.text!)
        createContract(contract: newContract)
        
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        
        self.present(storyboard.instantiateViewController(withIdentifier: "TableVC") as! TableVC, animated: true)
        
    }
    
    
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
