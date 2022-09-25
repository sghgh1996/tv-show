export enum Routes {
  HOME = '/',
  PERSONAL_DATA = '/personal-data',
  REGISTRATION = '/registration',
  RESET_PASSWORD = '/registration/password-reset',
  RESET_EMAIL = '/registration/email-reset',
  RESET_PIN = '/registration/pin-reset',
  RESET_PASSWORD_EMAIL = '/registration/password-reset/email',
  PAYMENT = '/payment',
  PRIVACY = '/privacy',
  LOGIN = '/login',
  EMAIL_LIST = '/personal-data/email-list',
  EMAIL_LIST_CONTRACT = '/personal-data/email-list/contract',
  EMAIL_LIST_CONTACT = '/personal-data/email-list/contact',
  PHONE_LIST = '/personal-data/phone-list',
  PHONE_LIST_CONTRACT = '/personal-data/phone-list/contract',
  PHONE_LIST_CONTACT = '/personal-data/phone-list/contact'
}

export enum ExternalRoutes {
  TEST_YELLO_PORTAL = 'https://test-mein.yello.de',
  EDIT_PIN = '/goto/3B7DC8BF9DEB57DF1FDA71101663E8C4',
  ADVERTISING_PERMISSION = '/goto/153325440FC7AE6778BD1EFA12FD3880',
  PROFILE_PERMISSION = '/goto/577CABF51161D6C027C7994B9196C152',
  DATA_VISUALIZATION_PERMISSION = '/goto/EC5C85145C14A65394326D25469D3840',

  MOBILITY_APP_ANDROID = 'https://play.google.com/store/apps/details?id=com.enbw.ev',
  MOBILITY_APP_IOS = 'https://apps.apple.com/de/app/enbw-mobility/id1232210521',
  MOBILITY_APP_DESKTOP = 'https://www.enbw.com/elektromobilitaet/produkte/mobilityplus-app',

  HOUSE_PLUS_APP_IOS = 'https://apps.apple.com/de/app/enbw-zuhause/id1540580646',
  HOUSE_PLUS_APP_ANDROID = 'https://play.google.com/store/apps/details?id=de.yellostrom.zuhauseplus',
  HOUSE_PLUS_APP_DESKTOP = 'https://www.enbw.com/service/app-zuhauseplus/',

  YELLO_PORTAL = 'https://mein.yello.de/login',

  YELLO_APP_ANDROID = 'https://play.google.com/store/apps/details?id=de.yellostrom.incontrol',
  YELLO_APP_IOS = 'https://apps.apple.com/de/app/kwhapp-strom-gas-check/id1019478181',

  ENBW_PORTAL = 'https://meine.enbw.com/login'
}
