/**
 * Const route names. All routes must exist in this list to ensure no duplicates, since duplicates breaks navigation TypeScript support.
 *
 * https://jakallergis.com/proper-react-navigation-v-5-with-type-script
 */
export enum Routes {
  BottomTabNavigator = 'BottomTabNavigator',
  NotFoundScreen = 'NotFoundScreen',
  HomeTab = 'Live',
  MedicalTab = 'Medical',
  AccountTab = 'Account',
  HeartTab = 'HeartTab'
}
export default Routes;
