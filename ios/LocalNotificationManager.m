//
//  LocalNotificationManager.m
//  AwesomeProject
//
//  Created by pratik shah on 10/10/24.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTModuleMethod.h>
#import <UserNotifications/UserNotifications.h>
#import <RCTAppDelegate.h>
#import "AppDelegate.h"

@interface LocalNotificationManager : NSObject <RCTBridgeModule>

@end

@implementation LocalNotificationManager

RCT_EXPORT_MODULE();


- (void)setUp {
  // Initialization code here
}

RCT_EXPORT_METHOD(scheduleLocalNotification) {
  AppDelegate *appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
  [appDelegate scheduleLocalNotification];
}





@end
