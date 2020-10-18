//
//  NavigationVC.swift
//  PochtaBlockchain
//
//  Created by Николай Пучко on 18.10.2020.
//

import UIKit

class NavigationVC: UINavigationController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    

    
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let newvc = segue.destination
        self.present(newvc, animated: true)
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    

}
