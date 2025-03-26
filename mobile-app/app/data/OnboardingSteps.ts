import { ImageSourcePropType } from 'react-native';

export interface OnboardingStep {
    title: string;
    description: string;
    image: ImageSourcePropType;
}

const onboardingSteps: OnboardingStep[] = [
    {
        title: "Have fun guessing lyrics",
        description: "Engage your music knowledge and guess the lyrics to your favorite songs. Test your memory and see how well you know the tunes!",
        image: require('../../assets/images/musicBadge.png'),
    },
    {
        title: "Friendly Wagers",
        description: "Challenge your friends with fun wagers and see who can guess the lyrics fastest. Add some friendly competition to the experience!",
        image: require('../../assets/images/card.png'),
    },
    {
        title: "Gamified Experience",
        description: "Earn points, level up, and unlock rewards as you guess lyrics correctly. Turn your love for music into a thrilling game with exciting challenges!",
        image: require('../../assets/images/splash-icon.png'),
    },
];

export default onboardingSteps;
