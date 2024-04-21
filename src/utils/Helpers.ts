export const getRandomRating = () => {
    const [minLimit, maxLimit] = [25, 95];
    const difference = maxLimit - minLimit;
    return Math.floor(Math.random() * difference + minLimit);
};

export const getWatchlistLogo = (title: string) => {
    return title.charAt(0).toUpperCase();
};
