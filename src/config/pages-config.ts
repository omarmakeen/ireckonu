export const config = {
    generalError: {
        name: 'allgemeiner_fehler',
        route: '/allgemeiner_fehler'
    },
    unauthorized: {
        name: 'nicht_erlaubt',
        route: '/nicht_erlaubt',
        navigation: {
            topLink: true,
            mobileBtn: false,
            navigationLink: '/meinvodafone/services/',
            mobileBtnLabelKey: 'common.buttons.cancel.std-headline'
        }
    },
    profile: {
        name: 'profile',
        route: '/profile',
        titleKey: 'Profiles',

        details: {
            name: 'profile-details',
            route: '/profile/details',
            titleKey: 'Profile Details'
        }
    }
}