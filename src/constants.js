export const LOGIN_URL = '/validate';
export const USER_INFO_URL = `/user-info`;
export const NEWS_URL = `/news `;

export const USERS_ERRORS = {
    'wrong_email_or_password': 'Invalid username or password!',
    'Failed to fetch': 'Please, check your internet connection',
    "user_not_found": 'Sorry, that user not found. '
};

const SOURCE_PATH = '../public/';
export const SITES_ICONS = {
    'vk': `${SOURCE_PATH}if_11_940987.svg`,
    'telegram': `${SOURCE_PATH}telegram-logo.svg`,
    'web': `${SOURCE_PATH}if_language_326663.svg`,
    'twitch': `${SOURCE_PATH}if_16_940984.svg`,
    'youtube': `${SOURCE_PATH}if_58-youtube_104445.svg`,
    'twitter': `${SOURCE_PATH}if_43-twitter_104461.svg`
};

export const COURSE_ETH_TO_RUB_BASE_API_PATH = 'https://min-api.cryptocompare.com/data';
export const COURSE_ETH_TO_RUB_URL = '/price?fsym=ETH&tsyms=RUB';
