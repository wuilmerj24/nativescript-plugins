//
//  AppDelegate.swift
//  Test
//
//  Created by Wuilmer Medrano on 15/12/25.
//


import Foundation
import UIKit

@objcMembers
@objc(NSCSwiftOrientation)
public class NSCSwiftOrientation: NSObject{
    public func changeRotation(rotation: UIInterfaceOrientationMask){
        if #available(iOS 16.0, *) {
                DispatchQueue.main.async {
                    UIViewController.attemptRotationToDeviceOrientation()
                    
                    let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene
                  windowScene?.requestGeometryUpdate(.iOS(interfaceOrientations: UIInterfaceOrientationMask(rawValue: rotation.rawValue) ?? UIInterfaceOrientationMask.landscapeRight)) { error in
                        print(error)
                      print(windowScene?.effectiveGeometry ?? "error gen windowScene  ")
                    }
                    print("se llamo changeRotation ",rotation)
                }
           }
    }
}
