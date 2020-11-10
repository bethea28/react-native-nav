import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

registerScreens()
export const start = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              bottomTabs: {
                id: 'BOTTOM_TABS_LAYOUT',
                children: [
                  {
                    stack: {
                      id: 'HOMETAB',
                      children: [
                        {
                          component: {
                            id: 'HOMESCREEN',
                            name: 'HomeScreen',
                          },
                        },
                      ],
                      options: {
                        bottomTab: {
                          icon: require('./latest.png'),
                        },
                      },
                    },
                  },
                  {
                    stack: {
                      id: 'PUSHEDTAB',
                      children: [
                        {
                          component: {
                            id: 'PUSHEDSCREEN',
                            name: 'PushedScreen',
                          },
                        },
                      ],
                      options: {
                        bottomTab: {
                          icon: require('./scores.png'),
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    })
  })
}
