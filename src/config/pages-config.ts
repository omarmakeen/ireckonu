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
    profileSearch: {
        name: 'profile',
        route: '/profile',
        titleKey: 'searchPage.header.title',
        showHeader: true,
        showSidebar: false
    },
    profileDetails: {
        name: 'profile-details',
        route: '/profile-details',
        titleKey: 'Profile Details',
        showHeader: true,
        showSidebar: false
    }
}